import React, { useState, useEffect } from 'react';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileCheck.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mobileCheck.addListener(handleResize);

    return () => mobileCheck.removeListener(handleResize);
  }, []);

  const moveCursor = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      return () => window.removeEventListener('mousemove', moveCursor);
    }
  }, [isMobile]);

  if (isMobile) return null;

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

