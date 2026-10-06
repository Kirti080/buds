# Everyday

A simple to-do app built with HTML, CSS, and JavaScript. Exactly **10 project files**, with no dependencies to install.

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

## The 10 files

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
