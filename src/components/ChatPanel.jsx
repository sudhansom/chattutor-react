import { useState } from "react";
import TextArea from "./ui/TextArea";
import ChatTutorTitle from "./ChatTutorTitle";
import GptImage from "../assets/images/gpt-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const ChatPanel = () => {
  const [chat, setText] = useState('');
  function longText (text) {
    let val = <div> <pre> <code> {text} </code> </pre> </div> ;
    setText(val)
  }
  return (
    <div className="relative h-full border grow text-center p-4 bg-gray-200">
      <div className="flex gap-4 justify-between px-4">
        <div>
          <img
            className="rounded-full mt-0.5"
            src={GptImage}
            height="40"
            width="40"
            alt="chat gpt image"
          />
        </div>
        <ChatTutorTitle />
      </div>
      {chat}
      <div className="w-full absolute bottom-0 left-0 rounded overflow-hidden p-2">
        <TextArea longText={longText} />
        <FontAwesomeIcon
          icon={faGear}
          className="absolute top-4 right-4 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ChatPanel;
