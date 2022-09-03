import React, { useState } from "react";
import CustomButton from "./CustomButton";

function SingleQuestion({ word, handleAnswer, isCorrect }) {
  const [answer, setAnswer] = useState("");

  const answerHandler = (ans) => {
    setAnswer(ans);
    handleAnswer(ans);
  };

  return (
    <div className="w-full">
      <div className="text-center my-5 ">
        <h1 className="text-3xl">
          What is the category of the word:{" "}
          <span className="block m-5 font-bold text-blue-500 md:inline-block md:my-0">
            {word}
          </span>{" "}
          ?
        </h1>
      </div>
      <div className="mt-20 w-full md:w-[80%] mx-auto text-center md:flex justify-evently items-center">
        <div className="flex justify-between items-center flex-1 my-5">
          <div className="flex-1 px-2">
            <CustomButton
              key="noun"
              handler={() => answerHandler("noun")}
              type="noun"
              isSelected={isCorrect !== null && answer === "noun"}
              isCorrect={isCorrect}
            />
          </div>
          <div className="flex-1 px-2">
            <CustomButton
              key="verb"
              handler={() => answerHandler("verb")}
              type="verb"
              isSelected={isCorrect !== null && answer === "verb"}
              isCorrect={isCorrect}
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-1 my-5">
          <div className="flex-1 px-2">
            <CustomButton
              key="adjective"
              handler={() => answerHandler("adjective")}
              type="adjective"
              isCorrect={isCorrect}
              isSelected={isCorrect !== null && answer === "adjective"}
            />
          </div>
          <div className="flex-1 px-2">
            <CustomButton
              key="adverb"
              handler={() => answerHandler("adverb")}
              type="adverb"
              isSelected={isCorrect !== null && answer === "adverb"}
              isCorrect={isCorrect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleQuestion;
