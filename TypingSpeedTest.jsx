import React, { useState, useEffect } from 'react';

const TypingSpeedTest = () => {
  const sampleText = "The quick brown fox jumps over the lazy dog";
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(null);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highScore') || 0
  );

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      calculateScore();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const calculateScore = () => {
    const words = userInput.trim().split(' ').length;
    const accuracy = calculateAccuracy();
    const wpm = Math.round((words / 10) * 60);
    const finalScore = Math.round(wpm * (accuracy / 100));
    setScore({ wpm, accuracy, finalScore });
    
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('highScore', finalScore);
    }
  };

  const calculateAccuracy = () => {
    const correct = [...userInput].filter((char, i) => char === sampleText[i]).length;
    const total = Math.max(userInput.length, sampleText.length);
    return Math.round((correct / total) * 100);
  };

  const resetGame = () => {
    setUserInput('');
    setTimeLeft(10);
    setIsActive(false);
    setScore(null);
  };

  const handleInputChange = (e) => {
    if (!isActive && e.target.value.length === 1) {
      setIsActive(true);
    }
    setUserInput(e.target.value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <div className="mb-4 text-lg font-bold text-gray-700">{sampleText}</div>
      <div className="mb-4 text-xl font-bold text-blue-600">
        Time left: {timeLeft}s
      </div>
      
      <textarea
        value={userInput}
        onChange={handleInputChange}
        disabled={timeLeft === 0}
        className="w-full p-2 border rounded-md resize-none h-32"
        placeholder="Start typing to begin..."
      />

      {score && (
        <div className="mt-4 space-y-2">
          <p className="font-bold">WPM: {score.wpm}</p>
          <p className="font-bold">Accuracy: {score.accuracy}%</p>
          <p className="font-bold">Final Score: {score.finalScore}</p>
          <p className="text-green-600 font-bold">High Score: {highScore}</p>
        </div>
      )}

      <button
        onClick={resetGame}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TypingSpeedTest;
