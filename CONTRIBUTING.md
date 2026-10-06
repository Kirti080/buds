# Contributing

## Local setup

Use Node.js 22 or newer. Run `npm start` from the project directory and open http://localhost:3000. No dependency installation is needed.

## Making changes

- Keep the app simple and dependency-free where practical.
- Use JavaScript modules and two spaces for indentation.
- Put task operations in tasks.js, persistence in storage.js, and task rendering in dom.js.
- Render user-entered text with textContent.
- Keep controls accessible with labels and visible keyboard focus.

## Manual verification

1. Add a task and confirm that whitespace-only input does not create one.
2. Complete a task and check the All, Active, and Completed filters.
3. Refresh the page and confirm tasks are restored.
4. Delete a task, then use Clear completed and check the remaining count.
5. Check the layout on a narrow screen and operate the app using the keyboard.

Describe your changes and the checks you performed when submitting a contribution.
