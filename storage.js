const KEY = 'everyday-tasks-v1';

export function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    if (!Array.isArray(saved)) throw new Error('Invalid saved list');
    const ids = new Set();
    const tasks = saved.filter(task => {
      if (!task || typeof task.id !== 'string' || ids.has(task.id) || typeof task.title !== 'string' || !task.title.trim() || task.title.length > 200 || typeof task.completed !== 'boolean') return false;
      ids.add(task.id);
      return true;
    });
    return { tasks, error: tasks.length !== saved.length };
  } catch {
    return { tasks: [], error: true };
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
    return true;
  } catch {
    return false;
  }
}
