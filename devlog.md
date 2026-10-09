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
