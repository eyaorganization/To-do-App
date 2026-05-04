function addTask(tasks, task) {
  return [...tasks, task];
}

module.exports = { addTask };
function deleteTask(tasks, taskName) {
  return tasks.filter(task => task !== taskName);
}

module.exports = { addTask, deleteTask };
function toggleTask(tasks, taskName) {
  return tasks.map(task =>
    task.name === taskName
      ? { ...task, done: !task.done }
      : task
  );
}

module.exports = { addTask, deleteTask, toggleTask };