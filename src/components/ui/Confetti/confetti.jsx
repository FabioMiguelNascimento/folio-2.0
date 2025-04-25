import confetti from 'canvas-confetti';
import { useEffect, useRef } from 'react';

function Confetti() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const myConfetti = confetti.create(containerRef.current, {
      useWorker: true,
      resize: true
    });

    const duration = 2000;
    const end = Date.now() + duration;
    const colors = ['#821cd0', '#a02ee1'];

    (function frame() {
      myConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      myConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    return () => {
      myConfetti.reset();
    };
  }, []);

  return (
    <canvas 
      ref={containerRef} 
      className="confetti-container"
    />
  );
}

export default Confetti;