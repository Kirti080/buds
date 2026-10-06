export function renderTasks(list, tasks) {
  const fragment = document.createDocumentFragment();
  for (const task of tasks) {
    const row = document.createElement('li');
    row.className = `task${task.completed ? ' completed' : ''}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.dataset.id = task.id;
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.title;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete';
    remove.dataset.id = task.id;
    remove.textContent = 'Delete';
    remove.setAttribute('aria-label', `Delete ${task.title}`);
    row.append(checkbox, label, remove);
    fragment.append(row);
  }
  list.replaceChildren(fragment);
}
