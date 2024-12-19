import { useState } from "react";
import Character2d from "../components/Character2d";
import ChatBox from "../components/ChatBot";
import { ChatProvider } from "../context/ChatContext";
import { settings } from "../assets/images";
import UserPreferences from "../components/UserPreferences";
import SettingButton from "../components/SettingButton";

const Conversation = () => {
  const [openSetting, setOpenSetting] = useState(false);

  const handleSettings = () => {
    setOpenSetting((prevState) => !prevState);
  }

  const closeDrawer = () => {
    setOpenSetting(false);
  };

  return (
    <ChatProvider>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-screen relative">
        {/* Left Character */}
        <div className="col-span-2 md:col-span-2 flex justify-center items-center bg-gray-200 p-4"
          style={{
            background: "#4a628a",
          }}>
          <Character2d />
        </div>

        {/* Right Chat */}
        <div className="col-span-2 bg-gray-50 p-6 md:col-span-3 px-5 py-20">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "#4a628a" }}>PixiePal Chat</h1>
          <ChatBox />
        </div>

        {/* Floating Settings Button here*/}
        <div className={`flex z-50 float-end absolute top-8 right-8 w-14 h-14 animate-spin ${openSetting ? "right-1/3" : "right-8"}`}>
          <SettingButton handleSettings={handleSettings} />
        </div>

        {/* Backdrop */}
        {openSetting && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeDrawer}
          ></div>
        )}

        {/* The User Preferences Drawer */}
        {openSetting ?
          (
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${openSetting ? "translate-x-0" : "translate-x-full"
                }`}>
              <UserPreferences />
            </div>) : null
        }
      </div>
    </ChatProvider>
  );
};

export default Conversation;
