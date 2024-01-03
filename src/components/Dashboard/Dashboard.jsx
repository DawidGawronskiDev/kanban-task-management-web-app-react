/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export const loader = async ({ params }) => {
  console.log(params);
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
      <Link>{task.title}</Link>
    </li>
  );
};

export default Dashboard;
