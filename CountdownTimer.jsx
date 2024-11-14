import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [time, isRunning]);

  const resetTimer = () => {
    setTime(10);
    setIsRunning(true);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md text-center">
      <h2 className="text-4xl font-bold mb-4">{time}</h2>
      <button
        onClick={resetTimer}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={isRunning}
      >
        {time === 0 ? 'Restart' : 'Reset'}
      </button>
    </div>
  );
};

export default CountdownTimer;
