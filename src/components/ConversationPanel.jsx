import { useState } from "react";
import "./ConversationPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";

const ConversationPanel = () => {
  const [showDelete, setShowDelete] = useState(false);
  const mouseOver = () => {
    setShowDelete(true);
  };
  const mouseOut = () => {
    setShowDelete(false);
  };
  return (
    <div className="h-full border basis-1/5 text-center">
      <div className="flex justify-between">
        <p className="text-blue-500 font-bold text-center p-2 bg-gray-50 basis-1/2 text-xs hover:bg-gray-100 hover:cursor-pointer m-0">
          ALL CHATS
        </p>
        <p className="text-center bg-slate-50 p-2 basis-1/2 font-bold text-xs hover:bg-gray-100 hover:cursor-pointer m-0">
          ABOUT THIS PDF
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center p-1 bg-gray-100 hover:cursor-pointer group">
        <FontAwesomeIcon
          className="group-hover:cursor-pointer text-gray-500 group-hover:text-gray-900"
          icon={faPlus}
        />
        <p className="font-bold group-hover:cursor-pointer text-gray-600 group-hover:text-gray-900 m-0">
          New chat
        </p>
      </div>
      <ul className="text-left p-0 m-0">
        <li>
          <span>Chat title 1</span>
          <div>
            <FontAwesomeIcon
              className="hover:cursor-pointer hover:text-red-500"
              icon={faTrashCan}
            />
          </div>
        </li>
        <li>
          <span>Chat title 2</span>
          <div>
            <FontAwesomeIcon
              className="hover:cursor-pointer hover:text-red-500"
              icon={faTrashCan}
            />
          </div>
        </li>
        <li>
          <span>Chat title 3</span>
          <div>
            <FontAwesomeIcon
              className="hover:cursor-pointer hover:text-red-500"
              icon={faTrashCan}
            />
          </div>
        </li>
        <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <span>Chat title 4</span>
          {showDelete && (
            <FontAwesomeIcon
              className="hover:cursor-pointer hover:text-red-500"
              icon={faTrashCan}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default ConversationPanel;
