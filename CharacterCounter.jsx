import React, { useState, useEffect } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`Character count: ${text.length}`);
  }, [text]);

  const getColorClass = () => {
    if (text.length === 0) return 'text-gray-500';
    return text.length <= 50 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full p-2 border rounded-md resize-none h-32"
      />
      <div className={`mt-2 font-bold ${getColorClass()}`}>
        Characters: {text.length}
      </div>
    </div>
  );
};

export default CharacterCounter;
