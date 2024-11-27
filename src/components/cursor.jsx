import React, { useState, useEffect } from 'react';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveCursor = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div>
      <div
        className="cursor"
        style={{
          position: 'fixed',
          left: `${position.x - 5}px`,
          top: `${position.y - 5}px`,
        }}
      />
    </div>
  );
};

export default App;

