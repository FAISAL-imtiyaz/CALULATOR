// // src/components/Button.jsx

// import React from 'react';

// const Button = ({ value, onClick, className }) => {
//   return (
//     <button className={className} onClick={() => onClick(value)}>
//       {value}
//     </button>
//   );
// };

// export default Button;
import React from 'react';

const Button = ({ value, onClick, className, spanTwo }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      className={`button ${className}`}
      onClick={handleClick}
      style={spanTwo ? { gridColumn: 'span 2' } : null}
    >
      {value}
    </button>
  );
};

export default Button;
