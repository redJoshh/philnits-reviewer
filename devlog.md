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
