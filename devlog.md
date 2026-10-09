# Devlog

## 2026-10-09 — Test run: 2011 IT Passport study portal

### Created
- **`tools/build-data.js`** — Zero-dependency Node script. Reads every `examQA-md/*.md`, parses each question into the CLAUDE.md schema, and writes `<year>/index.html` from the template. Prints warnings for malformed questions (option count, missing/conflicting answers, missing source line).
- **`tools/template.html`** — Single-file portal template (HTML + CSS + JS). The build script injects the question data and page title.
- **`2011/index.html`** — Generated portal for `IT Passport Exam - 2011 .md` (150 questions: Spring 2011 Q1–50, Autumn 2011 Q51–150).
- **`netlify.toml`** — Build command `node tools/build-data.js`, publish `.` (no npm install needed).
- **`devlog.md`** — This file.

### Parsing rules
- `### **Question N**` starts a question; `*(Source: … — Spring|Autumn YYYY)*` gives the session and id (`2011S-Q01`, `2011A-Q51`).
- Options are `* [ ] a)` / `* [x] b) … ✅` lines; `[x]`/✅ sets `correctAnswer`.
- `explanation` = the text of the `**Answer:**` line. If that line is missing, the marked option is used instead.
- Empty `*` bullets and `----` rules are dropped. Everything else before the options is the prompt (lists, tables, `[Specifications]` blocks kept).
- `category` is `null` for now (category filter skipped until the source is tagged).
- `hasDiagram` = prompt mentions a figure/diagram/graph/chart/flowchart, or a table that isn't present. 23 questions flagged; they show a "figure not included" note.

### Portal features
- Quiz view: clickable a–d options, green ✅ / red ❌ feedback, Reveal answer, Try again, Answer box after answering.
- Document view: `[x]` ✅ on correct options, Answer line, and "Copy as text" for the filtered list.
- Live search (text, options; a bare number like `42` jumps to that question), Session filter, Status filter (All / Unanswered / Incorrect / Bookmarked).
- Header scoreboard (answered, score %, remaining) + progress bar; Shuffle; Reset (keeps bookmarks); light/dark toggle.
- localStorage: answers, revealed, bookmarks, view, shuffle order, filters (`philnits:2011:v1`), theme (`philnits:theme`).
- Math: `$…$` rendered with KaTeX 0.16.9 (cdnjs). `$` glued to letters/digits (spreadsheet refs like `$A$36`, `B$2`) and escaped `\$` stay literal. Falls back to readable text if KaTeX fails to load.

### Source data notes
- Q41 has no `**Answer:**` line in the MD (fallback used). Source file left unchanged.

## 2026-10-09 — 2011 exam bank completed from the official PDFs

### Changed
- **`examQA-md/IT Passport Exam - 2011 .md`** — rebuilt (backup of the previous version kept outside the repo):
  - Removed MD Q101–150, which were exact duplicates of MD Q51–100.
  - Renumbered to the official exam numbering: **Spring Q1–100**, then **Autumn Q1–100** (Autumn Q1–50 were previously MD Q51–100).
  - Added the missing **Spring Q51–100** and **Autumn Q51–100**, transcribed from `2011/2011S_IP_Questions.pdf` and `2011/2011A_IP_Question.pdf`.
- **`2011/index.html`** — regenerated: 200 questions (100 Spring + 100 Autumn). IDs are now `2011S-Q01…Q100` and `2011A-Q01…Q100`, so progress saved under the old IDs no longer lines up; use Reset once.

### Verification
- All 200 answers checked against the official keys (`2011S_IP_Answers.pdf`, `2011A_IP_Answer.pdf`): no mismatches.
- Every question has 4 options and its Answer line agrees with the ✅ option; all 200 render without errors.

### Notes on the new questions
- Tables from the PDFs were typed as markdown tables.
- Figures were described in italic notes (e.g. control charts, flow diagrams, WBS tree, DFD, flowchart); no images yet.
- Case-study groups (Spring A/B/C and Autumn A/B/C, Q89–Q100): the first question of each group carries the full scenario; the other three carry a condensed version of the scenario they need, so each question works on its own (including in shuffle mode).

## 2026-10-09 — 2019 exam page (Spring + Autumn)

### Created
- **`2019/index.html`** — generated from `examQA-md/IT Passport Exam - 2019 Spring.md` and `IT Passport Exam - 2019 Autumn.md`. Both sessions share one page (Spring first, then Autumn), with the Session filter to switch.

### Changed
- **`tools/build-data.js`**
  - Reads a second markdown layout used by the 2019 files: `### Q1. prompt…`, `- a) …` options, `**✅ Correct Answer: a**`. The session comes from the file name (`… 2019 Spring.md`) or the title month (April = Spring, October = Autumn).
  - "Combination" questions whose options are table rows (`| a) | MP3 | JPEG | GIF |`) become normal options labelled with the column headers, e.g. "Still images: GIF · Moving images: MPEG · Audio: MP3".
  - Questions with fewer than 4 options or no answer are skipped with a warning instead of being shown half-built.
  - One page per year: files named `… YYYY Spring.md` / `… YYYY Autumn.md` are merged into `YYYY/index.html`, sorted Spring then Autumn by question number; duplicate IDs are reported.
  - For files without explanations, the Answer box shows the correct option's text.
- **`tools/template.html`** — `inline code` spans (e.g. spreadsheet formulas) render in a monospace style instead of showing backticks.
- **`2011/index.html`** — regenerated with the new template; content unchanged (all 200 answers still match the official keys).

### Source data notes (2019)
- Both 2019 files are titled "Questions 1–50" but are truncated: Spring ends inside Q28, Autumn ends inside Q38. Q28 (Spring) and Q38 (Autumn) are skipped until the files are completed.
- 2019 questions that reference figures (e.g. Spring Q5, Q14 "[Diagram A–D]") show the "figure not included" note; figures are deferred for now.

## 2026-10-09 — 2019 rebuilt from the completed source files

- **`examQA-md/IT Passport Exam - 2019 Spring.md` / `… 2019 Autumn.md`** were completed (50 questions each).
- **`tools/build-data.js`** — the `**✅ Correct Answer: x**` line may now be indented (the updated files indent it).
- **`2019/index.html`** — regenerated: 100 questions (Spring Q1–50, Autumn Q1–50), none skipped.
- Duplicate check: no repeated question numbers and no duplicate or near-duplicate questions within 2019. Six 2019 questions are reused from the 2011 papers (2019A-Q02 = 2011A-Q07, 2019A-Q20 = 2011A-Q17, 2019S-Q11 = 2011A-Q11, 2019S-Q19 = 2011A-Q16, 2019A-Q03 = 2011A-Q08, 2019S-Q05 = 2011A-Q05); these are genuine re-used exam questions and were kept.

## 2026-10-09 — Home page at the site root

### Created
- **`tools/home-template.html`** — design for the home page: one card per year (newest first) with its sessions and question counts (e.g. "Spring · 50", "Autumn · 50"), plus the viewer's progress (answered and score) for that year. Shares the light/dark setting with the year pages.
- **`index.html`** (root) — generated by the build. This is what Netlify serves at `/`.

### Changed
- **`tools/build-data.js`** — also writes the root `index.html` from `home-template.html`. New years appear on the home page automatically once their markdown is added to `examQA-md/`.
- **`tools/template.html`** — "← All years" link back to the home page; each year page saves a small progress summary (`philnits:<year>:summary`) for the home page cards.
- Links point to `…/index.html` explicitly so navigation also works when the files are opened locally by double-click, not only on Netlify.

## 2026-10-09 — 2026 exam page

### Created
- **`2026/index.html`** — generated from `examQA-md/IT Passport Exam - 2026.md` (title "April 2026", so the session is Spring 2026). 97 of 100 questions.
- **`index.html`** (root) — regenerated; now lists 2026, 2019 and 2011.

### Source data notes (2026)
- Q5, Q28 and Q94 are skipped: their answer choices are figures and the source has no option lines ("Diagrams omitted in source text"). They can be added once the figures/options are filled in.
- No duplicate questions within 2026. Five questions are reused from 2019 (2026S-Q43 = 2019A-Q42, 2026S-Q19 = 2019S-Q22, 2026S-Q41 = 2019S-Q43, 2026S-Q15 = 2019A-Q15, 2026S-Q06 = 2019S-Q05); kept, as with the 2011/2019 overlaps.
- No code changes were needed: the 2026 file uses the same layout as the 2019 files.

## 2026-10-09 — 2024 exam page (Spring + Autumn)

### Created
- **`2024/index.html`** — generated from `examQA-md/IT Passport Exam - 2024 Spring.md` (April 2024) and `IT Passport Exam - 2024 Autumn.md` (October 2024). 100 questions (Spring Q1–50, Autumn Q1–50), none skipped.
- **`index.html`** (root) — regenerated; now lists 2026, 2024, 2019 and 2011.

### Source data notes (2024)
- Spring Q1: the answer choices are figures ("[Figure A]"–"[Figure D]", omitted in source). It is kept because it has four option lines and an answer, but it can't be answered from the text alone until the figures are added.
- Spring Q17: the directory-structure diagram is omitted in the source; the question shows the "figure not included" note.
- No duplicate questions within 2024. Several are reused across years and were kept, as with earlier overlaps:
  - from 2019: 2024A-Q02 = 2019S-Q02, 2024A-Q04 = 2019S-Q03, 2024A-Q07 = 2019S-Q07, 2024S-Q21 = 2019S-Q22, 2024A-Q24 = 2019S-Q24, 2024A-Q31 = 2019S-Q31, 2024S-Q43 = 2019S-Q43, 2024S-Q40 = 2019S-Q44, 2024A-Q48 = 2019S-Q48, 2024S-Q11 = 2019A-Q13, 2024A-Q47 = 2019A-Q46
  - in 2026: 2026S-Q02 = 2024S-Q02, 2026S-Q19 = 2024S-Q21, 2026S-Q21 = 2024S-Q22, 2026S-Q29 = 2024S-Q29, 2026S-Q31 = 2024S-Q31, 2026S-Q41 = 2024S-Q43, 2026S-Q14 = 2024A-Q15, 2026S-Q27 = 2024A-Q28, 2026S-Q48 = 2024A-Q49
- No code changes were needed: the 2024 files use the same layout as the 2019 files. The other year pages were left as they were; rebuilding them only changes their build timestamp.

## 2026-10-09 — Figure hints for questions whose figure is missing

New rule in CLAUDE.md: when a question depends on a picture, figure, graph or table that the source does not include, show a note/hint below the choices that says what the answer is.

### Changed
- **Source markdown** — a `**💡 Figure hint:** …` line was added after the answer line of each question whose figure is missing. It says what the missing figure shows and why the answer is right. 30 questions in total:
  - 2011: Spring Q1, Q40, Q46, Q48; Autumn Q8, Q45
  - 2019: Spring Q1, Q3, Q5, Q14, Q20; Autumn Q1, Q3, Q22, Q27
  - 2024: Spring Q1, Q7, Q17, Q20, Q25; Autumn Q4, Q19, Q20, Q26
  - 2025: Autumn Q18
  - 2026: Q1, Q5, Q7, Q28, Q94
- **`tools/build-data.js`**
  - Reads the `💡 Figure hint` line into a new `figureHint` field. A new `figureMissing` flag is set when a question has a hint, has a `_(Note: … omitted …)_` line, or has placeholder choices such as "[Figure A]". The build warns about any question whose figure is missing but which has no hint.
  - The "(Note: … omitted in source text)" lines are no longer shown inside the question text; the page shows its own note instead.
  - Questions whose choices are figures and which have no option lines at all get placeholder choices "[Figure A]"–"[Figure D]" when they have a hint. As a result, **2026 Q5, Q28 and Q94 are no longer skipped**, and 2026 now has all 100 questions.
  - A year whose markdown has no complete questions yet is skipped (no empty page, no home-page card).
- **`tools/template.html`**
  - The "figure not included" note now appears only on questions that are actually missing their figure. It used to appear on any question that mentioned a word like "chart" or "diagram" (e.g. "Which of the following is a Gantt chart…").
  - Document view: the hint is shown below the choices, before the answer callout.
  - Quiz view: a "Show figure hint" button sits next to "Reveal answer". After the question is answered or revealed, the hint is shown automatically. "Try again" and Reset hide it again. Which hints are open is saved in `localStorage` with the rest of the progress.
  - "Copy as text" includes the hint, and search also matches hint text.
- **All year pages** regenerated.

### Notes on the hints
- Most hints are worked out from the question text and the answer key, e.g. decoding the sound-signal codes, the state ring in 2024 Spring Q7, and the directory paths.
- A few figures can't be reconstructed from the text: the table choices in 2019 Autumn Q27, the stack in 2026 Q5, and the sales tables in 2024 Autumn Q26. For these, the hint explains the reasoning and names the correct choice. It does not describe the exact figure.
- 2026 Q1's decision table is taken from 2011 Autumn Q6 (the same question). 2024 Autumn Q20's sheet is taken from 2019 Autumn Q17.

## 2026-10-09 — 2025 Autumn exam page

### Created
- **`2025/index.html`** — generated from `examQA-md/IT Passport Exam - 2025 Autumn.md` (October 2025). 50 questions (Autumn Q1–50), none skipped. The Spring 2025 file will be added later and will join the same page.
- **`index.html`** (root) — regenerated; now lists 2026, 2025, 2024, 2019 and 2011.

### Changed
- **`examQA-md/IT Passport Exam - 2025 Autumn.md`** — removed text left over from the extraction: the chat preamble ("Here are the first 50 questions…"), the outer ```` ```` ```` markdown fence, a stray ```` ```` ```` after Q6, and the closing fences at the end. The file was first saved as "… 2025 Spring.md" and renamed to "… 2025 Autumn.md" to match its October 2025 title. Added a figure hint to Q18. The question content is unchanged.
- **`tools/build-data.js`**
  - Accepts the answer line `**Correct Answer:** c` used by the 2025 file, as well as the existing `**✅ Correct Answer: c**`.
  - Code blocks in fences (```` ```text ````) are kept exactly as written, so program lines are not mistaken for options.
- **`tools/template.html`** — fenced code (the pseudo-code programs in 2025 Q6 and Q8) is shown as a monospace code block.

### Source data notes (2025)
- The questions are from the October 2025 (Autumn) exam, so IDs are `2025A-Q01`…`2025A-Q50`.
- No duplicate questions within 2025. Three are reused from 2019 and kept: 2025A-Q05 = 2019S-Q09, 2025A-Q11 = 2019A-Q12, 2025A-Q19 = 2019A-Q19.

## 2026-10-09 — 2025 Spring added to the 2025 page

### Changed
- **`2025/index.html`** — regenerated with `examQA-md/IT Passport Exam - 2025 Spring.md` (April 2025): 100 questions, Spring Q1–50 first, then Autumn Q1–50. None skipped. The Session filter now offers Spring 2025 and Autumn 2025.
- **`index.html`** (root) — the 2025 card now shows "Spring · 50" and "Autumn · 50".
- **`examQA-md/IT Passport Exam - 2025 Spring.md`**
  - Removed text left over from the extraction, the same as in the Autumn file: the chat preamble, the outer ```` ```` ```` markdown fence, a stray ```` ```` ```` after Q6, and the closing fences at the end. The question content is unchanged.
  - Added figure hints to Q1 (how Figure 2 chains the boxes) and Q30 (which network layout is correct; the four layouts are omitted in the source).
- **`tools/build-data.js`** — a choice written as `_(Figure omitted…)_` (2025 Spring Q30) becomes a "[Figure A]"–"[Figure D]" placeholder, and the question is flagged as missing its figure.
- **`examQA-md/IT Passport Exam - 2019 Autumn.md`** — the Q27 hint now lists the actual candidate "Customers" tables and explains why Table D is right. The tables come from 2025 Spring Q26, which is the same question with the tables written out.

### Source data notes (2025 Spring)
- No duplicates within 2025 (Spring vs Autumn). Three Spring questions are reused from 2019 and kept: 2025S-Q11 = 2019A-Q10, 2025S-Q26 = 2019A-Q27, 2025S-Q40 = 2019A-Q43.
