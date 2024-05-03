import React from "react";
import "../components/TopNavBar";
import TopNavBar from "../components/TopNavBar";
import SettingPanel from "../components/SettingPanel";
import ChatPanel from "../components/ChatPanel";
import ConversationPanel from "../components/ConversationPanel";

const HomePage = () => {
  return (
    <div>
      <TopNavBar />
      <div className="flex justify-between overflow-auto h-[calc(100vh-67px)]">
        <SettingPanel />
        <ChatPanel />
        <ConversationPanel />
      </div>
    </div>
  );
};

export default HomePage;
