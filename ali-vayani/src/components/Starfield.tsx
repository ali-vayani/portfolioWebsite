import React from 'react';

const Starfield: React.FC = () => {
  return (
    <div className="starfield">
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="star" />
      ))}
    </div>
  );
};

export default Starfield; 