import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const BackgroundGrid = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 200 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let opacity = 0;
    const targetOpacity = 1;
    const gridSize = 30;
    const dotSize = 1.5;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container.offsetWidth * dpr;
      canvas.height = container.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const getDistanceFromMouse = (x, y) => {
      const dx = x - mouseRef.current.x;
      const dy = y - mouseRef.current.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dotColor = getComputedStyle(document.body).getPropertyValue('--color-grid-dots').trim();
      ctx.fillStyle = dotColor;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const maxDimension = Math.max(canvas.width, canvas.height);
      const maxRadius = maxDimension * 0.8;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          let distanceOpacity = 1 - (distanceFromCenter / maxRadius);
          distanceOpacity = Math.pow(distanceOpacity, 2);
          if (distanceOpacity > 0.5) { // Aumentado para 0.5
            distanceOpacity = 0.5;
          }
          distanceOpacity = Math.min(0.5, Math.max(0, distanceOpacity)); // Aumentado para 0.5

          const mouseDistance = getDistanceFromMouse(x, y);
          const mouseEffect = Math.max(0, 1 - mouseDistance / mouseRef.current.radius);
          const mouseEffectPow = Math.pow(mouseEffect, 3);
          
          let drawX = x;
          let drawY = y;
          if (mouseEffect > 0) {
            const angle = Math.atan2(y - mouseRef.current.y, x - mouseRef.current.x);
            const push = mouseEffectPow * 80;
            drawX += Math.cos(angle) * push;
            drawY += Math.sin(angle) * push;

            ctx.beginPath();
            ctx.arc(drawX, drawY, dotSize * (1 + mouseEffectPow * 2), 0, Math.PI * 2);
            ctx.globalAlpha = opacity * (distanceOpacity + mouseEffectPow * 0.7); // Aumentado para 0.7
          } else {
            ctx.beginPath();
            ctx.arc(drawX, drawY, dotSize, 0, Math.PI * 2);
            ctx.globalAlpha = opacity * distanceOpacity;
          }
          
          ctx.fill();
        }
      }

      if (opacity < targetOpacity) {
        opacity += 0.02; // Aumentado para 0.02 para aparecer mais rápido
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
        radius: 200 * (window.devicePixelRatio || 1)
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0, radius: 0 };
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
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [containerRef]);

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
        zIndex: 1
      }}
    />
  );
};

BackgroundGrid.propTypes = {
  containerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

export default BackgroundGrid;