// src/components/Display.jsx

import React from 'react';

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
