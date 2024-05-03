import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const ChatTutorTitle = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col grow">
      <div
        className={`flex justify-between items-center p-2 bg-white shadow-md ${
          expand ? "rounded-t" : "rounded"
        }`}>
        <p className="font-bold">ChatTutor</p>

        {expand ? (
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
            icon={faEye}
          />
        ) : (
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
            icon={faEyeSlash}
          />
        )}
      </div>
      {expand && (
        <>
          <div className="bg-white border text-left p-4 shadow-md">
            <p className="text-xs pb-2">
              Hello I am your AI tutor. Select a PDF file from the menu at the
              top and click on the text to get explanations.
            </p>
          </div>
          <div className="bg-white border border-t-0 rounded-b text-left p-4 shadow-md">
            <a className="text-indigo-500" href="#">
              Ask a TA about this
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatTutorTitle;
