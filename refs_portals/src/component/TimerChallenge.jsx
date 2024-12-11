import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
const TimerChallenge = ({ title, timeSecond }) => {
  const [expired, setExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const timer = useRef();
  const dialogRef = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setExpired(true);
      dialogRef.current.showModal();
    }, timeSecond * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {expired && (
        <ResultModal ref={dialogRef} timer={timeSecond} result="lost" />
      )}
      <div className="challenge">
        <h1>{title}</h1>
        <p>
          <button>
            {timeSecond} second {timeSecond > 1 ? "s" : ""}
          </button>
        </p>
        <div className="btn">
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </div>
        <h3>{timeStarted ? "Time is Runing ..." : " Time inActive"}</h3>
      </div>
    </>
  );
};

export default TimerChallenge;


