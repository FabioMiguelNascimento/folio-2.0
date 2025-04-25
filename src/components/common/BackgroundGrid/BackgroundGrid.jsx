import { useEffect, useRef } from 'react';

const BackgroundGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let opacity = 0;
    const targetOpacity = 0.2;
    const gridSize = 30;
    const dotSize = 1.5;
    
    const resize = () => {
      const heroSection = document.getElementById('mainPage');
      if (!heroSection) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = heroSection.offsetWidth * dpr;
      canvas.height = heroSection.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDarkMode = document.body.classList.contains('dark');
      const dotColor = isDarkMode ? '#444444' : '#303030';
      
      ctx.fillStyle = dotColor;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const maxDimension = Math.max(canvas.width, canvas.height);
      const maxRadius = maxDimension * 1.5;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          let distanceOpacity = 1 - (distanceFromCenter / maxRadius);
          
          distanceOpacity = Math.pow(distanceOpacity, 1.5);
          
          distanceOpacity = Math.min(1, Math.max(0, distanceOpacity));
          
          ctx.globalAlpha = opacity * distanceOpacity;
          
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (opacity < targetOpacity) {
        opacity += 0.01;
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    const handleThemeChange = () => {
      opacity = 0;
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    resize();
    window.addEventListener('resize', resize);
    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='dottedGrid'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default BackgroundGrid;