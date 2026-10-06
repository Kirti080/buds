// Simple planner example: a day is ready when it has at least one task.
export const draftTasks = [];

export function planDay(tasks = draftTasks) {
  const total = tasks.length;
  return { total, ready: total > 0 };
}
