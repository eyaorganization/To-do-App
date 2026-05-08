const { addTask, deleteTask, toggleTask } = require('./todo.js');

test("add task", () => {
  const result = addTask([], "Study");
  expect(result).toContain("Study");
});

test("delete task", () => {
  const result = deleteTask(["Study", "Play"], "Study");
  expect(result).not.toContain("Study");
});

test("toggle task", () => {
  const tasks = [{ name: "Study", done: false }];
  const result = toggleTask(tasks, "Study");
  expect(result[0].done).toBe(true);
});