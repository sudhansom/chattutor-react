import "./BurgerMenu";
import BurgerMenu from "./BurgerMenu";
import RightNavigation from "./RightNavigation";

import Select from "./ui/Select";

import Logo from "../assets/images/chattutor-logo-slim.png";

const TopNavBar = ({ setShowChat }) => {
  return (
    <div className="flex justify-between items-center border p-2">
      <div className="flex gap-4 justify-between items-center">
        <BurgerMenu />
        <img
          className="hover:cursor-pointer"
          src={Logo}
          width="160"
          height="100"
          alt=""
        />
        <Select />
      </div>
      <RightNavigation setShowChat={setShowChat} />
    </div>
  );
};

export default TopNavBar;
