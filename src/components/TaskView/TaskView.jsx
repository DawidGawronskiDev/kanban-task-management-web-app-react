import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../App";

export const loader = async ({ params }) => {
  return params;
};

const TaskView = () => {
  const { data } = useContext(AppContext);
  const loaderData = useLoaderData();

  const findTask = (data, taskName) => {
    const boards = data.boards;

    console.log(boards);
  };

  if ((data, loaderData)) {
    findTask(data, loaderData.taskName);
  }

  return <div>Task View!</div>;
};

export default TaskView;
