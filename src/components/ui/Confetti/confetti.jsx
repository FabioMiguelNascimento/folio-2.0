import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function Confetti() {
  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ['#821cd0', '#a02ee1'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return null;
}

export default Confetti;