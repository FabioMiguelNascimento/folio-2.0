import React from "react";

function Cursor({}) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function moveCursor(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`cursor`}
      style={{
        left: `${position.x - 5}px`,
        top: `${position.y - 5}px`,
      }}
    />
  );
}

export default Cursor;
