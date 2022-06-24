import React from "react";
import { useTimer } from "react-timer-hook";
import { ClockIcon } from "@heroicons/react/outline";
function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex items-center space-x-2 px-4  ">
      <ClockIcon className="h-6 w-6 text-indigo-600" />
      <div className=" text-base font-semibold text-indigo-600 sm:text-xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}
export default Timer;
