import React, { useState, useEffect } from "react";
import CustomProgressbar from "./CustomProgressbar";
import SingleQuestion from "./SingleQuestion";

function Game({ wordsList, calculateHandler }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer) {
      if (answer === wordsList[currentQuestion].pos) {
        setIsCorrect(true);
        setScore((prevScore) => prevScore + 1);
      } else {
        setIsCorrect(false);
      }
    }
  };

  useEffect(() => {
    if (isCorrect !== null) {
      let timer1 = setTimeout(() => {
        setIsCorrect(null);
        // check if its last question
        if (currentQuestion === wordsList.length - 1) {
          calculateHandler((score / wordsList.length) * 100);
        } else {
          //not last one so it proceed to the next question
          setCurrentQuestion((prevState) => prevState + 1);
        }
      }, 100);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isCorrect]);

  return (
    <div className="mt-5 flex flex-col justify-around items-center">
      <div className="mt-10 w-[80%] mx-auto mb-5">
        <CustomProgressbar value={(currentQuestion / wordsList.length) * 100} />
      </div>
      <SingleQuestion
        word={wordsList[currentQuestion].word}
        handleAnswer={handleAnswer}
        isCorrect={isCorrect}
      />
    </div>
  );
}

export default Game;
