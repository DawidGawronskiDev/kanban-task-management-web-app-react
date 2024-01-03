/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Aside = () => {
  const { data, currentBoardName } = useContext(AppContext);

  return (
    <aside>
      <span>{`ALL BOARDS (${data.boards.length})`}</span>
      <nav>
        <ul>
          {data.boards.map((board) => (
            <BoardLink
              key={board.name}
              board={board}
              currentBoardName={currentBoardName}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const BoardLink = ({ board, currentBoardName }) => {
  const { handleCurrentBoardName } = useContext(AppContext);

  return (
    <li
      onClick={() => {
        handleCurrentBoardName(board.name);
      }}
      className={`${board.name === currentBoardName ? "bg-purple-300" : ""}`}
    >
      <Link to={`/board/${board.name}`}>{board.name}</Link>
    </li>
  );
};

export default Aside;
