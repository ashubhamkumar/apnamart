import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex items-center">
      <div className="font-medium text-base">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
    </div>
  );
}
export default Timer;
