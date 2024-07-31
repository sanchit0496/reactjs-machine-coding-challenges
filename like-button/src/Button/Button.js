import React from "react";
import { FaHeart, FaFighterJet } from "react-icons/fa";
import "./Button.css";

const Button = ({ onClick, liked, loading, error }) => {

  return (
    <div>
    <button className= {liked === true ?  "buttonHolderLiked" : "buttonHolder"} onClick={onClick}>
      <span>
        Button
      </span> 
      {loading === true ? <FaFighterJet /> : <FaHeart/>}
    </button>
    {error}
    </div>
  );
};

export default Button;
