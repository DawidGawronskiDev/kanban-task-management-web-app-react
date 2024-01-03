/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link, Outlet } from "react-router-dom";

export const loader = async ({ params }) => {
  return null;
};

const Dashboard = () => {
  const { data, currentBoardName } = useContext(AppContext);

  const currentBoard = data.boards.find(
    (board) => board.name === currentBoardName
  );

  return (
    <main>
      {currentBoard.columns.map((column) => (
        <Column key={column.name} column={column} />
      ))}
      <Outlet />
    </main>
  );
};

const Column = ({ column }) => {
  return (
    <div>
      <span>{`${column.name} (${column.tasks.length})`}</span>
      <ul>
        {column.tasks.map((task) => (
          <Task key={task.title} task={task} />
        ))}
      </ul>
    </div>
  );
};

const Task = ({ task }) => {
  return (
    <li>
      <Link to={`task/${task.title}/view`}>{task.title}</Link>
    </li>
  );
};

export default Dashboard;
