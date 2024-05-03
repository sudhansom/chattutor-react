import React from "react";

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
    </div>
  );
};

export default ConversationPanel;
