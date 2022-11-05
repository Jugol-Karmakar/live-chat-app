import React from "react";

const Chat = () => {
  return (
    <div className="bg-[#0b141a]">
      <div className="flex items-center">
        <div className="w-9 h-9 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <h5 className="text-white ml-3">Jack Pack</h5>
      </div>
    </div>
  );
};

export default Chat;
