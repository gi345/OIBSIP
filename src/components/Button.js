import React, { useRef } from 'react';
import './Button.css';
//import { gsap } from 'gsap';

const Button = ({ value, onClick }) => {
  const buttonRef = useRef(null);

 // useEffect(() => {
   // gsap.from(buttonRef.current, { opacity: 0, y: 10, duration: 0.5 });
//  }, []);

  return (
    <button ref={buttonRef} className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
