import { useState } from "react";

const RightNavigation = ({ setShowChat }) => {
  const [toogle, setToogle] = useState(true);
  console.log("toogled::", toogle);
  return (
    <div className="flex gap-4 justify-between items-center">
      <button className="py-1 px-2 bg-yellow-100">connecting...</button>
      <div
        role="button"
        onClick={() => {
          setToogle(!toogle);
          setShowChat(!toogle);
        }}
        className="flex gap-1 hover:cursor-pointer group">
        <div
          title="toogle sidebar"
          className="h-4 w-3 border-2 border-blue-400 group-hover:border-blue-500 "></div>
        <div className="h-4 border border-blue-400 group-hover:border-blue-500 "></div>
      </div>
    </div>
  );
};

export default RightNavigation;
