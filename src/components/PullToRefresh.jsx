import { useState, useEffect, useRef } from 'react';
import './PullToRefresh.css';
import logo from '../assets/logoa3.svg';

const PullToRefresh = () => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const isPulling = useRef(false);

  const threshold = 100; // Distance needed to trigger refresh
  const maxPull = 150;

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
        isPulling.current = true;
      }
    };

    const handleTouchMove = (e) => {
      if (!isPulling.current || isRefreshing) return;
      
      const currentY = e.touches[0].clientY;
      const diff = currentY - startY.current;
      
      if (diff > 0 && window.scrollY === 0) {
        // Resistance effect - gets harder to pull
        const distance = Math.min(diff * 0.5, maxPull);
        setPullDistance(distance);
        
        if (distance > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = () => {
      if (!isPulling.current) return;
      isPulling.current = false;
      
      if (pullDistance >= threshold) {
        setIsRefreshing(true);
        // Animate then refresh
        setTimeout(() => {
          window.location.reload();
        }, 600);
      } else {
        setPullDistance(0);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pullDistance, isRefreshing]);

  const progress = Math.min(pullDistance / threshold, 1);
  const rotation = pullDistance * 3;
  const scale = 0.5 + progress * 0.5;
  const opacity = Math.min(progress * 1.5, 1);

  if (pullDistance === 0 && !isRefreshing) return null;

  return (
    <div 
      className={`pull-to-refresh ${isRefreshing ? 'refreshing' : ''}`}
      style={{ 
        transform: `translateY(${isRefreshing ? 60 : pullDistance - 60}px)`,
        opacity: isRefreshing ? 1 : opacity
      }}
    >
      <div 
        className="ptr-logo"
        style={{ 
          transform: `rotate(${rotation}deg) scale(${isRefreshing ? 1 : scale})`,
        }}
      >
        <img src={logo} alt="" />
      </div>
      {progress >= 1 && !isRefreshing && (
        <div className="ptr-hint">Отпустите</div>
      )}
    </div>
  );
};

export default PullToRefresh;
