#!/usr/bin/env node
// Parses every examQA-md/*.md exam bank and writes a standalone study portal
// per exam year: "<year>/index.html" (built from tools/template.html).
// Zero dependencies — runs locally (`node tools/build-data.js`) or as the Netlify build command.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "examQA-md");
const TEMPLATE = path.join(__dirname, "template.html");

const RE_QUESTION = /^###\s*\*\*Question\s+(\d+)\*\*/;
const RE_SOURCE = /^\*\(Source:\s*(.+?)\s*[—-]\s*(Spring|Autumn|Fall)\s+(\d{4})\\?\)\*/i;
const RE_OPTION = /^\*\s+\\?\[( |x|X)\\?\]\s+([a-d])\)\s?(.*)$/;
const RE_ANSWER = /^\*\*Answer:\*\*\s*(.*)$/;
const RE_EMPTY_BULLET = /^\*\s*$/;
const RE_RULE = /^-{3,}\s*$/;
const RE_VISUAL = /\b(figure|diagram|graph|chart|flowchart|illustration)s?\b/i;
const RE_TABLE_REF = /\btable (below|shown)|\b(below|following) table\b/i;

function parseFile(file) {
  const lines = fs.readFileSync(file, "utf8").replace(/\r\n?/g, "\n").split("\n");
  const questions = [];
  const warnings = [];
  let q = null;

  const finish = () => {
    if (!q) return;
    const prompt = trimBlank(q.promptLines).join("\n");
    const trailing = trimBlank(q.trailingLines);
    const full = trailing.length ? prompt + "\n" + trailing.join("\n") : prompt;
    const tag = `Q${q.number}`;

    if (q.options.length !== 4) warnings.push(`${tag}: expected 4 options, found ${q.options.length}`);
    const marked = q.options.filter((o) => o.checked).map((o) => o.key);
    if (marked.length !== 1) warnings.push(`${tag}: expected 1 marked answer, found ${marked.length}`);
    const answerKey = (q.answer.match(/^([a-d])\)/) || [])[1];
    if (!q.answer) warnings.push(`${tag}: missing **Answer:** line (using marked option instead)`);
    else if (answerKey && marked[0] && answerKey !== marked[0])
      warnings.push(`${tag}: marked option (${marked[0]}) disagrees with Answer line (${answerKey})`);
    if (!q.session) warnings.push(`${tag}: missing Source line`);

    const correct = marked[0] || answerKey || null;
    const correctOpt = q.options.find((o) => o.key === correct);
    // Fall back to the marked option when the **Answer:** line is missing.
    const explanation = q.answer || (correctOpt ? `${correctOpt.key}) ${correctOpt.text}` : "");
    const hasTable = /^\|/m.test(full);
    questions.push({
      id: q.id,
      session: q.session,
      category: null, // categories not tagged in source yet
      questionNumber: q.number,
      prompt: full,
      hasDiagram: RE_VISUAL.test(full) || (RE_TABLE_REF.test(full) && !hasTable),
      options: q.options.map(({ key, text }) => ({ key, text })),
      correctAnswer: correct,
      explanation,
    });
    q = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, "");
    let m;
    if ((m = line.match(RE_QUESTION))) {
      finish();
      q = { number: +m[1], id: null, session: null, promptLines: [], trailingLines: [], options: [], answer: "" };
      continue;
    }
    if (!q) continue;
    if ((m = line.match(RE_SOURCE))) {
      const term = m[2][0].toUpperCase() + m[2].slice(1).toLowerCase();
      q.session = `${term} ${m[3]}`;
      q.id = `${m[3]}${term[0]}-Q${String(q.number).padStart(2, "0")}`;
      continue;
    }
    if ((m = line.match(RE_OPTION))) {
      const text = m[3].replace(/\s*✅\s*$/, "").trim();
      q.options.push({ key: m[2], text, checked: m[1].toLowerCase() === "x" || /✅/.test(m[3]) });
      continue;
    }
    if ((m = line.match(RE_ANSWER))) {
      q.answer = m[1].trim();
      continue;
    }
    if (RE_EMPTY_BULLET.test(line) || RE_RULE.test(line)) continue;
    if (q.answer) {
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
    if (!byYear.has(year)) byYear.set(year, { title: f.replace(/\.md$/i, "").trim(), questions: [] });
    byYear.get(year).questions.push(...questions);
  }

  for (const [year, exam] of byYear) {
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
}

main();
