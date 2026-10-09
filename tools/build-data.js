#!/usr/bin/env node
// Parses every examQA-md/*.md exam bank and writes a standalone study portal
// per exam year: "<year>/index.html" (built from tools/template.html), plus the
// home page "index.html" linking to every year (built from tools/home-template.html).
// Zero dependencies — runs locally (`node tools/build-data.js`) or as the Netlify build command.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "examQA-md");
const TEMPLATE = path.join(__dirname, "template.html");
const HOME_TEMPLATE = path.join(__dirname, "home-template.html");

// Two source layouts are supported:
//   A) "### **Question N**" + "*(Source: … — Spring 2011)*" + "* [x] b) … ✅" + "**Answer:** b) …"
//   B) "### QN. prompt…" + "- a) …" + "**✅ Correct Answer: a**" (session taken from the file name or title)
const RE_QUESTION = /^###\s*\*\*Question\s+(\d+)\*\*/;
const RE_QUESTION_B = /^###\s*Q(\d+)\.\s*(.*)$/;
const RE_SOURCE = /^\*\(Source:\s*(.+?)\s*[—-]\s*(Spring|Autumn|Fall)\s+(\d{4})\\?\)\*/i;
const RE_OPTION = /^\*\s+\\?\[( |x|X)\\?\]\s+([a-d])\)\s?(.*)$/;
const RE_OPTION_B = /^[-*]\s+([a-d])\)\s?(.*)$/;
const RE_ANSWER = /^\*\*Answer:\*\*\s*(.*)$/;
// "**✅ Correct Answer: a**" or (2025 files) "**Correct Answer:** a"
const RE_ANSWER_B = /^\s*\*\*(?:✅\s*)?Correct Answer:\s*(?:\*\*\s*)?([a-d])\b.*$/i;
const RE_FENCE = /^\s*```/;
const RE_EMPTY_BULLET = /^\*\s*$/;
const RE_RULE = /^-{3,}\s*$/;
const RE_VISUAL = /\b(figure|fig\.|diagram|graph|chart|flowchart|illustration)s?\b/i;
const RE_TABLE_REF = /\btable (below|shown)|\b(below|following) table\b/i;
// Figures the source could not include. A "**💡 Figure hint:** …" line (after the answer line)
// describes the missing figure and what the answer is, so the question can still be studied.
const RE_HINT = /^\s*\*\*💡\s*Figure hint:\*\*\s*(.*)$/i;
const RE_OMITTED_NOTE = /^\s*_\(Note:[^)]*\bomitted\b[^)]*\)_\s*$/i;
const RE_OMITTED_CLAUSE = /\.?\s*(?:Diagrams|Figures|Tables)? omitted in source text/i;
const RE_OMITTED_OPT = /^_\((figure|diagram|table|graph)s? omitted\b[^)]*\)_$/i;
const RE_PLACEHOLDER_OPT =/^\[?(figure|diagram|table|graph)\s+[a-d]\]?$/i;
const SESSION_ORDER = { Spring: 0, Autumn: 1 };
const MONTH_TERM = { april: "Spring", october: "Autumn" };

// Session for layout B: "… 2019 Spring.md" or a title like "# … – April 2019".
function fileSession(file, lines) {
  const year = (path.basename(file).match(/(\d{4})/) || [])[1];
  let term = (path.basename(file).match(/\b(Spring|Autumn|Fall)\b/i) || [])[1];
  if (!term) {
    const title = lines.find((l) => /^#\s/.test(l)) || "";
    const month = (title.match(/\b(April|October)\b/i) || [])[1];
    term = month && MONTH_TERM[month.toLowerCase()];
  }
  if (!year || !term) return null;
  term = /^fall$/i.test(term) ? "Autumn" : term[0].toUpperCase() + term.slice(1).toLowerCase();
  return { term, year };
}

const makeId = (year, term, n) => `${year}${term[0]}-Q${String(n).padStart(2, "0")}`;

// Layout B "combination" questions list options as table rows: "| a) | MP3 | JPEG | GIF |".
const RE_TABLE_OPTION = /^\|\s*([a-d])\)\s*\|(.*)\|$/;
const cells = (row) => row.split("|").map((c) => c.trim());

// Turns a table-row option into "Still images: GIF · Moving images: MPEG · Audio: MP3",
// taking the labels from the header row and removing the header from the prompt.
function tableOptionText(q, rest) {
  if (!q.tableHeader) {
    const lines = q.promptLines;
    let i = lines.length;
    while (i > 0 && /^\s*\|/.test(lines[i - 1])) i--;
    const block = lines.splice(i);
    const header = block.find((l) => !/^\s*\|[\s:|-]*\|?\s*$/.test(l));
    q.tableHeader = header ? cells(header.trim().replace(/^\||\|$/g, "")).slice(1) : [];
  }
  const values = cells(rest);
  return values.map((v, i) => (q.tableHeader[i] ? `${q.tableHeader[i]}: ${v}` : v)).join(" · ");
}

function parseFile(file) {
  const lines = fs.readFileSync(file, "utf8").replace(/\r\n?/g, "\n").split("\n");
  const fromFile = fileSession(file, lines);
  const questions = [];
  const warnings = [];
  let q = null;

  const finish = () => {
    if (!q) return;
    const prompt = trimBlank(q.promptLines).join("\n");
    const trailing = trimBlank(q.trailingLines);
    const full = trailing.length ? prompt + "\n" + trailing.join("\n") : prompt;
    const tag = `Q${q.number}`;

    const marked = q.options.filter((o) => o.checked).map((o) => o.key);
    const answerKey = q.answerKey || (q.answer.match(/^([a-d])\)/) || [])[1];
    if (!q.layoutB) {
      if (marked.length !== 1) warnings.push(`${tag}: expected 1 marked answer, found ${marked.length}`);
      if (!q.answer) warnings.push(`${tag}: missing **Answer:** line (using marked option instead)`);
      else if (answerKey && marked[0] && answerKey !== marked[0])
        warnings.push(`${tag}: marked option (${marked[0]}) disagrees with Answer line (${answerKey})`);
    }
    const correct = marked[0] || answerKey || null;
    // Questions whose choices are themselves figures may have no option lines at all;
    // give them placeholder choices so they can be answered with the help of the hint.
    if (!q.options.length && q.figureOmitted && q.hint)
      q.options = ["a", "b", "c", "d"].map((key) => ({ key, text: `[Figure ${key.toUpperCase()}]`, checked: false }));
    const correctOpt = q.options.find((o) => o.key === correct);

    // Incomplete questions (e.g. a truncated file) are left out rather than shown half-built.
    if (q.options.length !== 4 || !correctOpt || !q.session) {
      const why = !q.session ? "no session" : q.options.length !== 4 ? `${q.options.length} options` : "no answer";
      warnings.push(`${tag}: skipped (${why})`);
      q = null;
      return;
    }

    // Layout B has no explanation; like a missing **Answer:** line, show the correct option.
    const explanation = q.answer || `${correctOpt.key}) ${correctOpt.text}`;
    const hasTable = /^\|/m.test(full);
    const figureMissing = !!q.hint || q.figureOmitted || q.options.some((o) => RE_PLACEHOLDER_OPT.test(o.text));
    if (figureMissing && !q.hint) warnings.push(`${tag}: figure missing from source and no "💡 Figure hint" line`);
    questions.push({
      id: q.id,
      session: q.session,
      category: null, // categories not tagged in source yet
      questionNumber: q.number,
      prompt: full,
      hasDiagram: figureMissing || RE_VISUAL.test(full) || (RE_TABLE_REF.test(full) && !hasTable),
      figureMissing,
      figureHint: q.hint || null,
      options: q.options.map(({ key, text }) => ({ key, text })),
      correctAnswer: correct,
      explanation,
    });
    q = null;
  };

  for (const raw of lines) {
    let line = raw.replace(/\s+$/, "");
    let m;
    const newQuestion = (number, layoutB) => {
      finish();
      q = { number, layoutB, id: null, session: null, promptLines: [], trailingLines: [], options: [], answer: "", answerKey: null, hint: "", figureOmitted: false, done: false };
      if (fromFile) {
        q.session = `${fromFile.term} ${fromFile.year}`;
        q.id = makeId(fromFile.year, fromFile.term, number);
      }
    };
    if ((m = line.match(RE_QUESTION))) {
      newQuestion(+m[1], false);
      continue;
    }
    if ((m = line.match(RE_QUESTION_B))) {
      newQuestion(+m[1], true);
      if (m[2].trim()) q.promptLines.push(m[2]);
      continue;
    }
    if (!q) continue;
    // Fenced code (programs, pseudo-code) is kept verbatim as part of the prompt.
    if (RE_FENCE.test(line) || q.inFence) {
      if (RE_FENCE.test(line)) q.inFence = !q.inFence;
      (q.options.length ? q.trailingLines : q.promptLines).push(line);
      continue;
    }
    if ((m = line.match(RE_SOURCE))) {
      const term = /^fall$/i.test(m[2]) ? "Autumn" : m[2][0].toUpperCase() + m[2].slice(1).toLowerCase();
      q.session = `${term} ${m[3]}`;
      q.id = makeId(m[3], term, q.number);
      continue;
    }
    if (!q.layoutB && (m = line.match(RE_OPTION))) {
      const text = m[3].replace(/\s*✅\s*$/, "").trim();
      q.options.push({ key: m[2], text, checked: m[1].toLowerCase() === "x" || /✅/.test(m[3]) });
      continue;
    }
    if (q.layoutB && (m = line.match(RE_OPTION_B))) {
      let text = m[2].trim();
      // A choice that is itself a missing figure: "_(Figure omitted: …)_" → "[Figure A]".
      if (RE_OMITTED_OPT.test(text)) {
        text = `[Figure ${m[1].toUpperCase()}]`;
        q.figureOmitted = true;
      }
      q.options.push({ key: m[1], text, checked: false });
      continue;
    }
    if (q.layoutB && (m = line.match(RE_TABLE_OPTION))) {
      q.options.push({ key: m[1], text: tableOptionText(q, m[2]), checked: false });
      continue;
    }
    if ((m = line.match(RE_ANSWER))) {
      q.answer = m[1].trim();
      q.done = true;
      continue;
    }
    if ((m = line.match(RE_ANSWER_B))) {
      q.answerKey = m[1].toLowerCase();
      q.done = true;
      continue;
    }
    if ((m = line.match(RE_HINT))) {
      q.hint = m[1].trim();
      continue;
    }
    // "_(Note: Figures omitted in source text)_" is replaced by the figure note on the page.
    if (RE_OMITTED_NOTE.test(line)) {
      q.figureOmitted = true;
      continue;
    }
    if (RE_OMITTED_CLAUSE.test(line)) {
      q.figureOmitted = true;
      line = line.replace(RE_OMITTED_CLAUSE, ".").replace(/\.\.\)/, ".)");
    }
    if (RE_EMPTY_BULLET.test(line) || RE_RULE.test(line)) continue;
    if (q.done) {
      if (line.trim()) warnings.push(`Q${q.number}: ignored text after Answer line: "${line.slice(0, 60)}"`);
      continue;
    }
    (q.options.length ? q.trailingLines : q.promptLines).push(line);
  }
  finish();
  return { questions, warnings };
}

function trimBlank(arr) {
  let s = 0, e = arr.length;
  while (s < e && !arr[s].trim()) s++;
  while (e > s && !arr[e - 1].trim()) e--;
  // collapse runs of blank lines
  return arr.slice(s, e).filter((l, i, a) => l.trim() || (a[i - 1] && a[i - 1].trim()));
}

function main() {
  const template = fs.readFileSync(TEMPLATE, "utf8");
  const files = fs.readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith(".md")).sort();
  const byYear = new Map();

  for (const f of files) {
    const year = (f.match(/(\d{4})/) || [])[1];
    if (!year) {
      console.warn(`skip ${f}: no year in file name`);
      continue;
    }
    const { questions, warnings } = parseFile(path.join(SRC_DIR, f));
    console.log(`${f}: ${questions.length} questions`);
    warnings.forEach((w) => console.warn(`  warn ${w}`));
    // One page per year: "… 2019 Spring.md" and "… 2019 Autumn.md" both land in 2019/index.html.
    const title = f.replace(/\.md$/i, "").replace(/\s+(Spring|Autumn|Fall)\s*$/i, "").trim();
    if (!byYear.has(year)) byYear.set(year, { title, questions: [] });
    byYear.get(year).questions.push(...questions);
  }

  // A year whose markdown is still being written (no question parses yet) gets no page or home card.
  for (const [year, exam] of byYear) {
    if (exam.questions.length) continue;
    console.warn(`skip ${year}: no complete questions yet`);
    byYear.delete(year);
  }

  for (const [year, exam] of byYear) {
    const ids = new Set();
    for (const q of exam.questions) {
      if (ids.has(q.id)) console.warn(`  warn ${year}: duplicate question id ${q.id}`);
      ids.add(q.id);
    }
    const rank = (q) => SESSION_ORDER[q.session.split(" ")[0]] ?? 9;
    exam.questions.sort((a, b) => rank(a) - rank(b) || a.questionNumber - b.questionNumber);
    const data = { title: exam.title, year, generatedAt: new Date().toISOString(), questions: exam.questions };
    const json = JSON.stringify(data).replace(/</g, "\\u003c");
    const html = template
      .replace(/__PAGE_TITLE__/g, exam.title)
      .replace("/*__EXAM_DATA__*/null", () => json);
    const outDir = path.join(ROOT, year);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
    console.log(`wrote ${year}/index.html (${exam.questions.length} questions)`);
  }

  // Home page at the site root: one card per year, newest first.
  const years = [...byYear].sort(([a], [b]) => b.localeCompare(a)).map(([year, exam]) => {
    const sessions = [];
    for (const q of exam.questions) {
      const name = q.session.split(" ")[0];
      const s = sessions.find((x) => x.name === name);
      if (s) s.count++;
      else sessions.push({ name, count: 1 });
    }
    return { year, title: exam.title, total: exam.questions.length, sessions };
  });
  const site = JSON.stringify({ generatedAt: new Date().toISOString(), years }).replace(/</g, "\\u003c");
  const home = fs.readFileSync(HOME_TEMPLATE, "utf8").replace("/*__SITE_DATA__*/null", () => site);
  fs.writeFileSync(path.join(ROOT, "index.html"), home);
  console.log(`wrote index.html (${years.length} years)`);
}

main();
