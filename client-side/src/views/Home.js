import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import StartGame from "../components/StartGame";
import Game from "../components/Game";
import { getWordsList, getRank } from "../store/actions/game";
import CustomLoading from "../components/CustomLoading";
import Result from "../components/Result";

function Home() {
  const [gameStatus, setGameStatus] = useState(0);
  //state 0 game didnt start yet // state 1 game started // state 2 game ended and show results
  const dispatch = useDispatch();
  const wordsList = useSelector((state) => state.wordsList);
  const rank = useSelector((state) => state.rank);

  useEffect(() => {
    dispatch(getWordsList());
  }, [dispatch]);

  if (wordsList === null || wordsList.length === 0) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-start">
        <Navbar />
        <main className="flex-1 w-full">
          <CustomLoading />
        </main>
      </div>
    );
  }

  const calculateHandler = (score) => {
    dispatch(getRank(score));
    setGameStatus(2);
  };
  const restartHandler = () => {
    dispatch(getWordsList());
    setGameStatus(0);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-start">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto">
        {/* start component */}
        {gameStatus === 0 && (
          <StartGame
            startHandler={() => {
              setGameStatus(1);
            }}
          />
        )}
        {/* game component */}
        {gameStatus === 1 && (
          <Game wordsList={wordsList} calculateHandler={calculateHandler} />
        )}
        {/* result component */}
        {gameStatus === 2 && (
          <>
            {rank === null || rank === 0 ? (
              <div className="flex-1 w-full">
                <CustomLoading />
              </div>
            ) : (
              <Result rank={rank} restartHandler={restartHandler} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
