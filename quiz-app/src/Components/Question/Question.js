import React from "react";
import { useState } from "react";
import "./Question.css";

const Question = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Who wrote 'To be, or not to be'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Twain"],
      answer: "Shakespeare",
    },
  ];

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [clickedOption, setClickedOption] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleOptionSelect = (selectedOption) => {
    console.log("selectedOption", selectedOption);
    setClickedOption(selectedOption);
  };

  const handlePrevClick = () => {
    setActiveQuestionIndex(activeQuestionIndex - 1);
  };

  const handleNextClick = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1);
    if (clickedOption === questions[activeQuestionIndex].answer) {
      setCurrentScore((prev) => prev + 1);
    }
  };
console.log('currentScore', currentScore)
  const handleCompleteClick = () => {
    setGameComplete(true);
  };

  return (
    
    <div>
      <div>
        Question <br />
        {questions[activeQuestionIndex].question}
      </div>
      {questions[activeQuestionIndex].options.map((option) => {
        return (
          <>
            <div
              className="quiz-options"
              style={{backgroundColor: clickedOption === option ? 'grey': ''}}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          </>
        );
      })}
      <div className="button-holder">
        <button onClick={handlePrevClick} disabled={activeQuestionIndex === 0}>
          Prev
        </button>
        {activeQuestionIndex !== questions.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeQuestionIndex === questions.length - 1 && (
          <button onClick={handleCompleteClick}>Complete Quiz</button>
        )}
      </div>
    </div>
  );
};

export default Question;
