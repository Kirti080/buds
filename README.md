# Everyday

A simple to-do app built with HTML, CSS, and JavaScript. **15 project files**, with no dependencies to install.

## Run

Install Node.js 22 or newer, open a terminal in this directory, and run:

```sh
npm start
```

Open **http://localhost:3000** in your browser. Stop the server with Ctrl+C. Use the server instead of opening index.html directly because the app uses JavaScript modules.

## Features

- Add and delete tasks.
- Mark tasks complete or active.
- Filter by all, active, or completed.
- Clear all completed tasks.
- Save tasks in this browser using localStorage.
- Responsive layout, keyboard controls, and labeled form elements.

Tasks stay on this browser and device. Clearing browser storage removes them. There are no accounts or cloud sync.

## Build check

Run `npm run build` to syntax-check all JavaScript files in the project root. This check intentionally fails on the unfinished drafts in rough-notes.js and rough-widget.js. Fix or remove both drafts to make it pass. These drafts are not imported by the app, so `npm start` still runs the app.

## The 15 files

| File | Purpose |
| --- | --- |
| index.html | App structure |
| styles.css | Layout and appearance |
| app.js | Events and application state |
| tasks.js | Task operations and filters |
| storage.js | Browser persistence and validation |
| dom.js | Safe rendering of task text |
| server.js | Local development server |
| package.json | Start command and project metadata |
| README.md | Setup and usage |
| .gitignore | Files excluded from version control |
| .editorconfig | Shared editor formatting settings |
| CONTRIBUTING.md | Development and verification instructions |
| CHANGELOG.md | Project change history |
| rough-notes.js | Intentionally invalid notes draft |
| rough-widget.js | Intentionally invalid widget draft |
