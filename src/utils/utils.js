const findTask = (data, taskName) => {
  for (const board of data.boards) {
    for (const column of board.columns) {
      const task = column.tasks.find((task) => task.title === taskName);
      if (task) {
        return task;
      }
    }
  }
  return null;
};

const findSubtask = (data, subtaskName) => {
  for (const board of data.boards) {
    for (const column of board.columns) {
      console.log(column);
    }
  }
  return null;
};

export { findTask, findSubtask };
