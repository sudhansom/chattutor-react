import TextArea from "./ui/TextArea";
import ChatTutorTitle from "./ChatTutorTitle";
const ChatPanel = () => {
  return (
    <div className="relative h-full border basis-1/2 text-center p-4 bg-gray-200">
      <div className="flex gap-4 justify-between px-4">
        <span>icon</span>
        <ChatTutorTitle />
      </div>
      <div className="w-full absolute bottom-0 left-0 rounded overflow-hidden p-2">
        <TextArea />
      </div>
    </div>
  );
};

export default ChatPanel;
