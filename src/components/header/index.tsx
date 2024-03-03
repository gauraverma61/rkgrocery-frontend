import { Menu, Search, User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <div className=" flex items-center justify-between bg-[#1F1B24] h-[40px] py-2.5 px-3 ">
        <div className="flex">
          <Menu className=" text-white" />
        </div>
        <div className=" text-white text-xl font-bold mt-2 bg-red-400 py-1 px-4 transform -skew-x-12 border-white border-2 tracking-wide">RK Grocery</div>
        <span className=" text-white">
          <User />
        </span>
      </div>
      <div className="bg-[#1F1B24] p-2">
        <div className="flex items-center h-[45px] overflow-hidden rounded bg-white">
          <Search size={20} className="mx-2 text-gray-400" />
          <input
            type="text"
            className=" flex-1 bg-transparent border-none outline-none h-full"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
