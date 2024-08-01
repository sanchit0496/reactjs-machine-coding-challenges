import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [clickedItemId, setClickedItemId] = useState(0);

  const data = [
    { id: "option01", title: "Option 01" },
    { id: "option02", title: "Option 02" },
    { id: "option03", title: "Option 03" },
    { id: "option04", title: "Option 04" },
    { id: "option05", title: "Option 05" },
  ];

  const handleClick = (clickedId) => {
    console.log("clickedId", clickedId);
    setClickedItemId(clickedId);
  };

  return (
    <div className="navbarContainer">
      <nav>
        <div className="sandwichContainer">
          <div className="sandwichLayer"></div>
          <div className="sandwichLayer"></div>
          <div className="sandwichLayer"></div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="navbarOptions"
            id={item.id}
            onClick={() => handleClick(item.id)}
            style={{
              borderBottom: clickedItemId === item.id ? "5px solid black" : "",
            }}
          >
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
