# buds reviewer notes

## Architecture

This is a dependency-free browser to-do application named Everyday, using native HTML, CSS, and ES modules. `app.js` owns UI state and event handling; `tasks.js` contains immutable task operations; `storage.js` handles validated `localStorage` persistence; and `dom.js` renders task elements safely. `server.js` is a minimal local HTTP server that serves only the allowlisted application files.

## Conventions

- Keep task transformations pure and return new arrays/objects rather than mutating state (`tasks.js`: `addTask`, `toggleTask`, and `deleteTask`).
- Keep persistence isolated behind `loadTasks` and `saveTasks` in `storage.js`; application state is initialized from `loadTasks()` and updated through `update()` in `app.js`.
- Task records have the shape `{ id, title, completed }`. IDs are generated with `crypto.randomUUID()` (`tasks.js`) and duplicate or malformed persisted IDs are discarded (`storage.js`).
- Normalize user input with `trim()` and enforce the 200-character title limit in `tasks.js`; persisted data is independently validated in `storage.js`.
- Render user-provided task text with DOM APIs and `textContent`, never HTML interpolation (`dom.js`). Event handling uses delegation on the task list (`app.js`).
- Use native browser APIs and ES module imports; `package.json` intentionally has no dependencies and `"type": "module"` enables the import syntax.
- Keep server routes explicit: new browser-served files must be added to the `allowed` map in `server.js`. The server supports only `GET` and `HEAD`.
- Preserve accessibility behavior: task labels are associated with checkbox IDs (`dom.js`), delete buttons have task-specific `aria-label`s, and filter buttons update `aria-pressed` (`app.js`).

## Intentional non-standard choices

- There is no backend, authentication, or cloud synchronization. Tasks intentionally live only in browser `localStorage` under the versioned key `everyday-tasks-v1` (`storage.js`).
- The custom `server.js` is deliberately minimal and binds to `127.0.0.1`; it is a development server, not a general-purpose production web server.
- Persistence failures are non-fatal: the UI remains usable while `app.js` displays a warning that changes may be lost after refresh.

## Watch out for

- Do not introduce `innerHTML` or HTML string rendering for task titles; this would undermine the safe rendering approach in `dom.js`.
- Changes to the task schema or storage key need compatible validation/migration handling in `storage.js`; invalid records are intentionally dropped.
- Ensure new assets or modules are added to `server.js`’s allowlist, otherwise they will return 404 despite existing in the repository.
- Preserve immutable updates and ensure every task-changing path calls `saveTasks` through `update()` in `app.js`.
- Keep filter values aligned with `filterTasks()` (`all`, `active`, `completed`); unknown values currently behave like `all`.
