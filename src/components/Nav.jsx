import React from "react";
import preshtech from "../assets/preshtech.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  const handleImageClick = () => {
    const confirmExit = window.confirm(
      "Are you sure you want to leave this page and go to the mainpage all details enrased?"
    );
    if (confirmExit) {
      Navigate("/");
    }
  };

  return (
    <div className="flex justify-around bg-pink-600 text-white p-5 items-center">
      <div onClick={handleImageClick} className="cursor-pointer">
        <img className="h-10 w-10" src={preshtech} alt="PreshTech" />
      </div>
      <div>
        <h1 className="text-[40px] font-bold">
          Make it fun by completing each task !!!
        </h1>
      </div>
      <div className="font-bold"></div>
    </div>
  );
};

export default Nav;
