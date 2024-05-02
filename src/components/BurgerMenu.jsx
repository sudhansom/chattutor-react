import React from "react";

const BurgerMenu = () => {
  return (
    <div className="flex flex-col gap-1.5 w-6 hover:cursor-pointer mt-1">
      <div className="h-0.5 bg-slate-500"></div>
      <div className="h-0.5 bg-slate-500"></div>
      <div className="h-0.5 bg-slate-500"></div>
    </div>
  );
};

export default BurgerMenu;
