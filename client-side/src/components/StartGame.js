import { Button } from "@mui/material";
import React from "react";

function StartQuiz({ startHandler }) {
  return (
    <div className="mt-5 flex flex-col justify-around items-center">
      <div className="mt-20">
        <h2 className="text-3xl">Start Game</h2>
      </div>
      <div className="w-full max-w-lg text-center mt-20">
        <Button variant="contained" className="w-[80%]" onClick={startHandler}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default StartQuiz;
