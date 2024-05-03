import TextArea from "./ui/TextArea";
const ChatPanel = () => {
  return (
    <div className="relative h-full border basis-1/2 text-center p-4 bg-gray-200">
      ChatPanel
      <div className="w-full absolute bottom-0 left-0 rounded overflow-hidden p-2">
        <TextArea />
      </div>
    </div>
  );
};

export default ChatPanel;
