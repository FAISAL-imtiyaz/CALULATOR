// // src/components/Calculator.jsx

// import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import Button from './Button';
// import Display from './Display';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleButtonClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult(null);
//   };

//   const handleCalculate = () => {
//     try {
//       const evalResult = eval(input.replace('x', '*').replace('÷', '/'));
//       setResult(evalResult);
//       setInput(String(evalResult));

//       if (input.includes('5+6') || input.includes('5*6')) {
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000);
//       }
//     } catch {
//       setResult('Error');
//     }
//   };

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'Enter') {
//         handleCalculate();
//       }
//     };

//     window.addEventListener('keypress', handleKeyPress);
//     return () => {
//       window.removeEventListener('keypress', handleKeyPress);
//     };
//   }, [input]);

//   return (
//     <div className="calculator">
//       {showConfetti && <Confetti />}
//       <Display input={input} result={result} />
//       <div className="buttons">
//         {[
//           '(', ')', 'mc', 'm+', 'm-', 'mr', 'C','+/-','%','÷',
//           '2nd', 'x²', 'x³', 'xʸ','eˣ', '10ˣ','7', '8', '9', '×',
//           '1/x','√x', '∛x', 'y√x', 'ln', 'log₁₀','4', '5', '6','-',
//            'x!', 'sin', 'cos','tan', 'e', 'EE', '1', '2', '3','+',
//           'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand','0', '.', '=',   
               
//         ].map((value) => (
//           <Button
//             key={value}
//             value={value}
//             onClick={value === 'C' ? handleClear : value === '=' ? handleCalculate : handleButtonClick}
//             className={value === 'C' || value === '=' ? 'special-button' : ''}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
// src/components/Calculator.jsx

// import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import Button from './Button';
// import Display from './Display';
// import History from './History';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [theme, setTheme] = useState('dark-theme');
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult(null);
//   };

//   const handleCalculate = () => {
//     try {
//       const evalResult = eval(input.replace('x', '*').replace('÷', '/'));
//       setResult(evalResult);
//       setInput(String(evalResult));
//       setHistory((prevHistory) => [...prevHistory, `${input} = ${evalResult}`]);

//       if (input.includes('5+6') || input.includes('5*6')) {
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000);
//       }
//     } catch {
//       setResult('Error');
//     }
//   };

//   const handleThemeSwitch = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleCalculate();
//     } else if (event.key === 'Backspace') {
//       setInput((prev) => prev.slice(0, -1));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [input]);

//   return (
//     <div className={`calculator ${theme}`}>
//       {showConfetti && <Confetti />}
//       <button onClick={handleThemeSwitch}>Toggle Theme</button>
//       <Display input={input} result={result} />
//       <div className="buttons">
//         {[
//           '(', ')', 'mc', 'm+', 'm-', 'mr', 'C','+/-','%','÷',
//          '2nd', 'x²', 'x³', 'xʸ','eˣ', '10ˣ','7', '8', '9', '×',
//         '1/x','√x', '∛x', 'y√x', 'ln', 'log₁₀','4', '5', '6','-',
//          'x!', 'sin', 'cos','tan', 'e', 'EE', '1', '2', '3','+',
//          'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand','0', '.', '=',   
//         ].map((value) => (
//           <Button
//             key={value}
//             value={value}
//             onClick={value === 'C' ? handleClear : value === '=' ? handleCalculate : handleButtonClick}
//             className={value === 'C' || value === '=' ? 'special-button' : ''}
//           />
//         ))}
//       </div>
//       <History history={history} />
//     </div>
//   );
// };

// export default Calculator;
// src/components/Calculator.jsx

// import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import Button from './Button';
// import Display from './Display';
// import History from './History';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [theme, setTheme] = useState('dark-theme');
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult(null);
//   };

//   const handleCalculate = () => {
//     try {
//       const evalResult = eval(input.replace('x', '*').replace('÷', '/'));
//       setResult(evalResult);
//       setInput(String(evalResult));
//       setHistory((prevHistory) => [...prevHistory, `${input} = ${evalResult}`]);

//       if (input.includes('5+6') || input.includes('5*6')) {
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000);
//       }
//     } catch {
//       setResult('Error');
//     }
//   };

//   const handleThemeSwitch = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleCalculate();
//     } else if (event.key === 'Backspace') {
//       setInput((prev) => prev.slice(0, -1));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [input]);

//   return (
//     <div className={`calculator ${theme}`}>
//       {showConfetti && <Confetti />}
//       <button onClick={handleThemeSwitch}>Toggle Theme</button>
//       <Display input={input} result={result} />
//       <div className="buttons">
//         {[
//           '(', ')', 'mc', 'm+', 'm-', 'mr', 'C','+/-','%','÷',
//         '2nd', 'x²', 'x³', 'xʸ','eˣ', '10ˣ','7', '8', '9', '×',
//          '1/x','√x', '∛x', 'y√x', 'ln', 'log₁₀','4', '5', '6','-',
//         'x!', 'sin', 'cos','tan', 'e', 'EE', '1', '2', '3','+',        'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand','0', '.','='
//         ].map((value) => (
//           <Button
//             key={value}
//             value={value}
//             onClick={value === 'C' ? handleClear : value === '=' ? handleCalculate : handleButtonClick}
//             className={value === 'C' || value === '=' ? 'special-button' : ''}
//           />
//         ))}
//       </div>
//       <History history={history} />
//     </div>
//   );
// };

// export default Calculator;
// import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import Button from './Button';
// import Display from './Display';
// import History from './History';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [theme, setTheme] = useState('dark-theme');
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       handleCalculate();
//     } else if (value === 'C') {
//       handleClear();
//     } else if (value === 'AC') {
//       handleAllClear();
//     } else {
//       setInput((prev) => prev + value);
//     }
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult(null);
//   };

//   const handleAllClear = () => {
//     setHistory([]);
//   };

//   const handleCalculate = () => {
//     try {
//       const evalResult = eval(input.replace('x', '*').replace('÷', '/'));
//       setResult(evalResult);
//       setHistory((prevHistory) => [...prevHistory, `${input} = ${evalResult}`]);

//       if (input.includes('5+6') || input.includes('5*6')) {
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000);
//       }
//     } catch {
//       setResult('Error');
//     }
//   };

//   const handleThemeSwitch = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleCalculate();
//     } else if (event.key === 'Backspace') {
//       setInput((prev) => prev.slice(0, -1));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [input]);

//   return (
//     <div className={`calculator ${theme}`}>
//       {showConfetti && <Confetti />}
//       <button className="theme-toggle" onClick={handleThemeSwitch}>
//         Toggle Theme
//       </button>
//       <Display input={input} result={result} />
//       <div className="buttons">
//         {[
// '(', ')', 'mc', 'm+', 'm-', 'mr', 'C','+/-','%','÷',
//          '2nd', 'x²', 'x³', 'xʸ','eˣ', '10ˣ','7', '8', '9', '×',
//           '1/x','√x', '∛x', 'y√x', 'ln', 'log₁₀','4', '5', '6','-',
//         'x!', 'sin', 'cos','tan', 'e', 'EE', '1', '2', '3','+',        'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand','0', '.','='
//         ].map((value) => (
//           <Button
//             key={value}
//             value={value}
//             onClick={handleButtonClick}
//             className={value === 'C' || value === '=' || value === '1/x' ? 'special-button' : ''}
//             spanTwo={value === '0'}
//           />
//         ))}
//       </div>
//       <div className="history-container">
//         <History history={history} />
//         <button className="clear-history" onClick={handleAllClear}>
//           Clear History
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Button from './Button';
import Display from './Display';
import History from './History';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [theme, setTheme] = useState('dark-theme');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      handleCalculate();
    } else if (value === 'C') {
      handleClear();
    } else if (value === 'AC') {
      handleAllClear();
    } else if (value === 'x') {
      setInput((prev) => prev + '*'); // Treat 'x' as multiplication operator
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleAllClear = () => {
    setHistory([]);
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input.replace(/x/g, '*').replace(/÷/g, '/'));
      setResult(evalResult);
      setHistory((prevHistory) => [...prevHistory, `${input} = ${evalResult}`]);

      if (input.includes('5+6') || input.includes('5*6')) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } catch {
      setResult('Error');
    }
  };

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCalculate();
    } else if (event.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (event.key === 'x') {
      handleButtonClick('*'); // Treat 'x' key as multiplication operator '*'
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className={`calculator ${theme}`}>
      {showConfetti && <Confetti />}
      <button className="theme-toggle" onClick={handleThemeSwitch}>
        Toggle Theme
      </button>
      <Display input={input} result={result} />
      <div className="buttons">
        {[
          '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '÷',
          '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
          '1/x', '√x', '∛x', 'y√x', 'ln', 'log₁₀', '4', '5', '6', '-',
          'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
          'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=',
        ].map((value) => (
          <Button
            key={value}
            value={value}
            onClick={handleButtonClick}
            className={value === 'C' || value === '=' || value === '1/x' ? 'special-button' : ''}
            spanTwo={value === '0'}
          />
        ))}
      </div>
      <div className="history-container">
        <History history={history} />
        <button className="clear-history" onClick={handleAllClear}>
          Clear History
        </button>
      </div>
    </div>
  );
};

export default Calculator;
