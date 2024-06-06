import { useState } from "react";
import "../components/TopNavBar";
import TopNavBar from "../components/TopNavBar";
import SettingPanel from "../components/SettingPanel";
import ChatPanel from "../components/ChatPanel";
import ConversationPanel from "../components/ConversationPanel";

const HomePage = () => {
  const [showChat, setShowChat] = useState(true);
  const toogleSideBar = (value) => {
    setShowChat(value);
  };
  return (
    <div>
      <TopNavBar setShowChat={toogleSideBar} />
      <div className="d-flex content-justify-between overflow-auto h-[calc(100vh-48px)]">
        <SettingPanel />
        <ChatPanel />
        {showChat && <ConversationPanel />}
      </div>
    </div>
  );
};

export default HomePage;
