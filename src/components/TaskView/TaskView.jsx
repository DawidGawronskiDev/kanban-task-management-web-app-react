/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../App";
import { findTask, findSubtask } from "../../utils/utils";

export const loader = async ({ params }) => {
  return params;
};

const TaskView = () => {
  const { data } = useContext(AppContext);
  const loaderData = useLoaderData();

  const [task, setTask] = useState(null);

  useEffect(() => {
    if (data && loaderData) {
      setTask(findTask(data, loaderData.taskTitle));
    }
  }, [data, loaderData]);

  if (task) {
    return (
      <div>
        <h1>{task.title}</h1>
        <span>{task.description}</span>
        <div>
          <span>{`Subtasks (${
            task.subtasks.filter((task) => task.isCompleted).length
          } of ${task.subtasks.length})`}</span>
          <div>
            {task.subtasks.map((subtask) => (
              <Subtask key={subtask.title} subtask={subtask} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

const Subtask = ({ subtask }) => {
  const [isCompleted, setCompleted] = useState(subtask.isCompleted);

  const changeCompleted = () => {
    setCompleted(!isCompleted);
  };

  return (
    <div className={`${isCompleted && `bg-purple-300`}`}>
      <input
        onChange={changeCompleted}
        type="checkbox"
        defaultChecked={subtask.isCompleted ? true : false}
      />
      <span>{subtask.title}</span>
    </div>
  );
};

export default TaskView;
