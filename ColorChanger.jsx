import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [customColor, setCustomColor] = useState('#000000');

  const colors = [
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' }
  ];

  useEffect(() => {
    console.log(`Color changed to: ${selectedColor}`);
  }, [selectedColor]);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <div 
        className="w-full h-32 rounded-lg mb-4"
        style={{ backgroundColor: selectedColor }}
      />
      
      <div className="flex space-x-2 mb-4">
        {colors.map(color => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color.value)}
            className="px-4 py-2 rounded text-white"
            style={{ backgroundColor: color.value }}
          >
            {color.name}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={customColor}
          onChange={(e) => {
            setCustomColor(e.target.value);
            setSelectedColor(e.target.value);
          }}
          className="w-12 h-12"
        />
        <span className="text-gray-600">Custom Color</span>
      </div>
    </div>
  );
};

export default ColorChanger;
