import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkTheme));
    console.log(`Theme changed to: ${isDarkTheme ? 'dark' : 'light'}`);
  }, [isDarkTheme]);

  return (
    <div className={`p-6 max-w-sm mx-auto rounded-xl shadow-md transition-colors duration-200 ${
      isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</h2>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`p-2 rounded-full ${
            isDarkTheme ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-yellow-400'
          }`}
        >
          {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      <p className="mt-4">This theme preference will persist across page reloads.</p>
    </div>
  );
};

export default ThemeToggle;
