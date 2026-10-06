import { addTask, toggleTask, deleteTask, filterTasks } from './tasks.js';
import { loadTasks, saveTasks } from './storage.js';
import { renderTasks } from './dom.js';

const $ = selector => document.querySelector(selector);
const saved = loadTasks();
let tasks = saved.tasks;
let filter = 'all';
const list = $('#task-list');
const input = $('#task-input');
const warning = $('#storage-warning');

function showWarning(message) {
  warning.hidden = false;
  warning.textContent = message;
}

function render() {
  const visible = filterTasks(tasks, filter);
  renderTasks(list, visible);
  const remaining = tasks.filter(task => !task.completed).length;
  $('#count').textContent = `${remaining} left`;
  $('#summary').textContent = `${tasks.length - remaining} of ${tasks.length} completed`;
  $('#empty').hidden = visible.length > 0;
  $('#empty').textContent = tasks.length ? 'No tasks in this view.' : 'A fresh start. Add your first task above.';
  $('#clear-completed').disabled = remaining === tasks.length;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
}

function update(next) {
  tasks = next;
  if (!saveTasks(tasks)) showWarning('Your browser could not save these tasks. Changes will be lost after refreshing.');
  render();
}

$('#task-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!input.value.trim()) { input.focus(); return; }
  filter = 'all';
  update(addTask(tasks, input.value));
  input.value = '';
  input.focus();
});

list.addEventListener('change', event => {
  if (!event.target.matches('input[type="checkbox"]')) return;
  const id = event.target.dataset.id;
  update(toggleTask(tasks, id));
  const checkbox = [...list.querySelectorAll('input')].find(item => item.dataset.id === id);
  (checkbox ?? input).focus();
});

list.addEventListener('click', event => {
  const button = event.target.closest('.delete');
  if (!button) return;
  update(deleteTask(tasks, button.dataset.id));
  input.focus();
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  filter = button.dataset.filter;
  render();
}));

$('#clear-completed').addEventListener('click', () => {
  update(tasks.filter(task => !task.completed));
  input.focus();
});

if (saved.error) showWarning('Some saved tasks could not be loaded. You can still use the app.');
render();
