import React from "react";
import "../Header/header.css";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container">
      <div className="text">Sapien</div>
      <ul>
        <li>Morbi</li>
        <li>Nunc Various</li>
        <li>Donec</li>
      </ul>
      <div className="icons">
        <IoSearchOutline />
        <CiHeart />
        <GoPerson />
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Header;
