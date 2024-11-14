import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const OnlineStatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastOffline, setLastOffline] = useState(null);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setLastOffline(new Date().toLocaleTimeString());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <div className={`flex items-center justify-center space-x-2 p-4 rounded-lg ${
        isOnline ? 'bg-green-100' : 'bg-red-100'
      }`}>
        {isOnline ? (
          <Wifi className="text-green-600" size={24} />
        ) : (
          <WifiOff className="text-red-600" size={24} />
        )}
        <span className="font-bold">
          Status: {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
      
      {lastOffline && (
        <p className="mt-4 text-gray-600 text-sm">
          Last went offline at: {lastOffline}
        </p>
      )}
    </div>
  );
};

export default OnlineStatusIndicator;
