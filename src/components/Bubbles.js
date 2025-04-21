import React, { useMemo } from 'react';

const Bubbles = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, index) => {
      const i = Math.floor(Math.random() * 10 + 1); 
      const delay = Math.random() * 40;
      return {
        id: index,
        i,
        animationDelay: -delay.toFixed(2),
      };
    });
  }, []);

  return (
    <div className="bolhas">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          style={{
            '--i': bubble.i,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default Bubbles;
