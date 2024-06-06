import "./BurgerMenu";
import BurgerMenu from "./BurgerMenu";
import RightNavigation from "./RightNavigation";

import Select from "./ui/Select";

import Logo from "../assets/images/chattutor-logo-slim.png";

const TopNavBar = ({ setShowChat }) => {
  return (
    <div className="flex justify-between items-center border p-4">
      <div className="flex gap-8 justify-between items-center">
        <BurgerMenu />
        <img
          className="hover:cursor-pointer"
          src={Logo}
          width="200"
          height="100"
          alt=""
        />
      </div>
      <Select />
      <RightNavigation setShowChat={setShowChat} />
    </div>
  );
};

export default TopNavBar;
