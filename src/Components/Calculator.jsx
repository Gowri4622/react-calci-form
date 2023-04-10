import React, { useState } from 'react';
import './Calculator.css'


function CalculatorBox() {
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleCalculateClick = () => {
    try {
      const result = eval(inputValue); // Use eval with caution!
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <React.Fragment>
    <h1 className='title'>My Calculator</h1>
    <div className='calculator-box'>
    
      <input type="text" value={inputValue} readOnly />

      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('+')}>+</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('-')}>-</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('*')}>*</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleCalculateClick()}>=</button>
        <button onClick={() => handleNumberClick('/')}>/</button>
      </div>

      <div>
        <button onClick={() => handleClearClick()}>Clear</button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default CalculatorBox;
