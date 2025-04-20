import React, { useMemo } from 'react';

const Bubbles = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, index) => ({
      id: index,
      animationDelay: Math.random() * 40
    }));
  }, []);

  return (
    <div className="bolhas">
      {bubbles.map((bubble) => (
        <span 
          key={bubble.id} 
          style={{ 
            '--i': bubble.id,
            animationDuration: `${120 / bubble.animationDelay}s`
          }}
        ></span>
      ))}
    </div>
  );
};

export default Bubbles;