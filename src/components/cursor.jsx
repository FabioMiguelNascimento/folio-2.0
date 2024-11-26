import React, { useState, useEffect } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    const moveCursor = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x - 5}px`,
        top: `${position.y - 5}px`,
      }}
    />
  );
}

export default Cursor;
