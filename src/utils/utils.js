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

export { findTask };
