## Project Overview

Convert extracted markdown exam banks (IT Passport exams) into a high-performance, single-file interactive HTML/JS study portal. The output must serve dual purposes: an interactive quiz tool for exam practice and an easy-to-copy clean document view.

---

## Technical Architecture & Constraints

- **Format:** Single standalone file (`index.html`) containing HTML, CSS, and JS (zero local npm build steps required).
- **Styling:** Vanilla CSS (or Tailwind CSS via CDN) with modern CSS variables for clean theming (Light / Dark mode).
- **External Dependencies:** Keep strictly minimal:
  - KaTeX or MathJax (via CDN) for mathematical and pixel expressions (e.g., $500 \times 400$, probabilities).
  - Modern, system font stack (San Francisco, Inter, Segoe UI, Roboto).
- **State Persistence:** Use `localStorage` to save user progress, selected answers, and dark/light mode preferences.
- Read the MD files stored in Folder 'examQA-md' folder
- Do not push, always provide first what was the changes
- Create a devlog.md where you can dictate what was the changes, creations, etc.

---

## Core Features & Requirements

### 1. Dual-View Modes

- **Interactive Quiz Mode:**
  - Radio options or clickable buttons for each choice (`a`, `b`, `c`, `d`).
  - Immediate visual feedback on selection: correct option highlighted in green with a `✅`, incorrect option highlighted in red with a `❌`.
  - Display explanations/notes under the question once an answer is chosen or via a "Reveal Answer" toggle.
- **Document / Google Docs View:**
  - Formats all questions cleanly with pre-checked correct answers (`[x]` or `✅`) and answer callouts.

### 2. Search & Filtering

- **Live Search:** Instant filter searching question text, options, and question numbers.
- **Category Filter:** Filter by exam domains (Technology, Management, Strategy).
- **Session Filter:** Filter by exam term (Spring 2011, Autumn 2011, etc.).
- **Status Filter:** All, Unanswered, Incorrect, Bookmarked / Flagged for review.

### 3. Study Utilities

- **Progress Tracker:** Sticky or header scoreboard showing total answered, score percentage, and remaining questions.
- **Reset Button:** Option to clear `localStorage` progress to re-take the exam.
- **Shuffle Option:** Ability to randomize question order for practice runs.

---

## Data Structure & Ingestion Rules

When parsing questions from the markdown source into JavaScript/HTML:

1. **Question Data Object Schema:**
   ```javascript
   {
     id: "2011S-Q01",
     session: "Spring 2011",
     category: "Technology", // Technology | Management | Strategy
     questionNumber: 1,
     prompt: "Full question prompt text...",
     hasDiagram: false, // true if referencing an SVG or ASCII diagram
     options: [
       { key: "a", text: "Option A text" },
       { key: "b", text: "Option B text" },
       { key: "c", text: "Option C text" },
       { key: "d", text: "Option D text" }
     ],
     correctAnswer: "b",
     explanation: "Explanation or key takeaway text if present"
   }
   ```
