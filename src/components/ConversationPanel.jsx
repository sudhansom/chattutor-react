import React from "react";
import "./ConversationPanel.css";

const ConversationPanel = () => {
  return (
    <div className="h-full border basis-1/5 text-center">
      <div className="flex justify-between">
        <p className="text-blue-500 font-bold text-center p-2 bg-gray-50 basis-1/2 text-xs hover:bg-gray-100 hover:cursor-pointer">
          ALL CHATS
        </p>
        <p className="text-center bg-slate-50 p-2 basis-1/2 font-bold text-xs hover:bg-gray-100 hover:cursor-pointer">
          ABOUT THIS PDF
        </p>
      </div>
      <ul className="text-left mt-4 pl-4">
        <li>Chat title 1</li>
        <li>Chat title 2</li>
        <li>Chat title 3</li>
        <li>Chat title 4</li>
      </ul>
    </div>
  );
};

export default ConversationPanel;
