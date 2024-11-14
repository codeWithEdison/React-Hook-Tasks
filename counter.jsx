import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAutoIncrementing, setIsAutoIncrementing] = useState(false);

  useEffect(() => {
    console.log(`Counter value changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    let interval;
    if (isAutoIncrementing) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAutoIncrementing]);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="space-x-2">
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(prev => prev - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={() => setIsAutoIncrementing(!isAutoIncrementing)}
          className={`${
            isAutoIncrementing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
          } text-white px-4 py-2 rounded`}
        >
          {isAutoIncrementing ? 'Stop Auto' : 'Start Auto'}
        </button>
      </div>
    </div>
  );
};

export default Counter;
