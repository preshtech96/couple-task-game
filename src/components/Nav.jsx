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
    <div className="flex flex-col md:flex-row justify-between items-center bg-pink-600 text-white p-4 md:p-5 gap-4 text-center md:text-left">
      <div onClick={handleImageClick} className="cursor-pointer">
        <img className="h-12 w-12 mx-auto md:mx-0" src={preshtech} alt="PreshTech" />
      </div>
      <h1 className="text-xl md:text-3xl font-bold">
        Make it fun by completing each task !!!
      </h1>
      <div className="font-bold hidden md:block"></div>
    </div>
  );
};

export default Nav;
