import React from "react";
import { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
  ];

  const handlePrevClick = () => {
    if(activeIndex === 0){
        setActiveIndex((prev) => images.length - 1)
    }else{
        setActiveIndex((prev) => prev - 1)
    }
  }

  const handleNextClick = () => {
    if(activeIndex === images.length -1){
        setActiveIndex((prev) => 0)
    }else{
        setActiveIndex((prev) => prev + 1)
    }
  }

  console.log('activeIndex', activeIndex)

  return (
    <div className="componentContainer">
      <div className="imageContainer">
        <img src={images[activeIndex]} />
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
