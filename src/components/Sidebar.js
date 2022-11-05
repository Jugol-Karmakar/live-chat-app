import React from "react";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="bg-[#111b21] border-r border-gray-700">
      <Navbar />
      <Search />
      <Chat></Chat>
    </div>
  );
};

export default Sidebar;
