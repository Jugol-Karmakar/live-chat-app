import React, { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menus = ["New group", "Starrted messages", "Settings", "Logout"];

  return (
    <div className="flex items-center justify-between bg-[#202c33] py-2 px-3">
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
      <div className="relative">
        <HiDotsHorizontal
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold text-white cursor-pointer"
        ></HiDotsHorizontal>
        {open && (
          <div className="bg-[#233138] py-4 w-48 shadow-lg absolute -left-44 top-7 z-40">
            <ul>
              {menus.map((menu) => (
                <li
                  className="py-2 px-4 text-sm cursor-pointer text-white hover:bg-[#111b21]"
                  key={menu}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
