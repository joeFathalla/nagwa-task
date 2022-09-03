import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Result({ rank, restartHandler }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();
  useEffect(() => {
    if (showConfetti) {
      let timer1 = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [showConfetti]);
  return (
    <div className="mt-5 flex flex-col justify-around items-center">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="mt-20 text-center">
        <h2 className="text-3xl">Well Done Your Rank is </h2>
        <h1 className="text-5xl text-blue-500">{rank}</h1>
      </div>
      <div className="w-full max-w-lg text-center mt-20">
        <Button
          variant="contained"
          className="w-[80%]"
          onClick={restartHandler}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default Result;
