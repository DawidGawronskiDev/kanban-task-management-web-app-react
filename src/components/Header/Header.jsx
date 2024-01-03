import { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {
  const { currentBoardName } = useContext(AppContext);

  return (
    <header>
      <img src={"/assets/logo-dark.svg"} alt="Logo" />
      <span>{currentBoardName}</span>
    </header>
  );
};

export default Header;
