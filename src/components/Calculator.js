import React, { useState, useRef, useEffect } from 'react';
import './Calculator.css';
import Button from './Button';
//import { gsap } from 'gsap';

const Calculator = () => {
  const [input, setInput] = useState('');
  const resultRef = useRef(null);

 // useEffect(() => {
   // if (input) {
    //  gsap.from(resultRef.current, { opacity: 0, y: -20, duration: 0.3 });
   // }
 // }, [input]);

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display" ref={resultRef}>{input || '0'}</div>
      <div className="buttons">
        {/* Add numbers and AC button */}
        {['AC', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map((value) => (
          <Button
            key={value}
            value={value}
            onClick={() => handleButtonClick(value)}
            className={`button ${value === 'AC' ? 'ac' : ''}`}
          />
        ))}

        {/* Add operators on the right */}
        {['/', '*', '-', '+', '='].map((value) => (
          <Button
            key={value}
            value={value}
            onClick={() => handleButtonClick(value)}
            className="button operator"
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

