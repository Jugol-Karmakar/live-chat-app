import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-[#a7bcff] min-h-screen flex justify-center items-center">
      <div className="border rounded-lg container max-w-5xl mx-auto h-[550px] grid grid-cols-[350px_minmax(800px,_1fr)_50px]">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
