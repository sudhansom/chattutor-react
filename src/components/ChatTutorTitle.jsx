import { useState } from "react";
const ChatTutorTitle = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col grow">
      <div className="flex justify-between p-2 rounded bg-white shadow-md">
        <p className="font-bold">ChatTutor</p>
        <p
          onClick={() => {
            setExpand(!expand);
          }}>
          icon
        </p>
      </div>
      {expand && (
        <div className="w-full bg-white border rounded text-left p-4">
          <p className="text-xs pb-2">
            Hello I am your AI tutor. Select a PDF file from the menu at the top
            and click on the text to get explanations.
          </p>
          <a className="text-indigo-500" href="#">
            Ask a TA about this
          </a>
        </div>
      )}
    </div>
  );
};

export default ChatTutorTitle;
