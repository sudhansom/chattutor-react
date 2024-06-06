import React from "react";

import settingImg from '../assets/images/setting.png'

const SettingPanel = () => {
  return (
    <div className="border h-full basis-1/35 text-center p-0 text-2xl font-bold overflow-hidden">
      <img className="object-cover" src={settingImg} alt="" />
    </div>
  );
};

export default SettingPanel;
