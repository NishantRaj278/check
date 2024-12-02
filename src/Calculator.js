import React, { useState } from 'react';

function Calculator() {
  // State to hold the current input and result
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button clicks
  const handleClick = (value) => {
    setInput(input + value); // Append clicked value to input
  };

  // Handle the clear button
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Handle the calculation
  const handleCalculate = () => {
    try {
      // Evaluate the input using eval function (for simple arithmetic operations)
      setResult(eval(input)); // Perform the calculation
    } catch (error) {
      setResult('Error'); // In case of invalid input
    }
  };

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>

      <div style={styles.result}>
        {/* Display current input or result */}
        <p>{input || result}</p>
      </div>

      <div style={styles.buttons}>
        {/* Calculator buttons */}
        <button onClick={() => handleClick('1')} style={styles.button}>1</button>
        <button onClick={() => handleClick('2')} style={styles.button}>2</button>
        <button onClick={() => handleClick('3')} style={styles.button}>3</button>
        <button onClick={() => handleClick('+')} style={styles.button}>+</button>
        
        <button onClick={() => handleClick('4')} style={styles.button}>4</button>
        <button onClick={() => handleClick('5')} style={styles.button}>5</button>
        <button onClick={() => handleClick('6')} style={styles.button}>6</button>
        <button onClick={() => handleClick('-')} style={styles.button}>-</button>
        
        <button onClick={() => handleClick('7')} style={styles.button}>7</button>
        <button onClick={() => handleClick('8')} style={styles.button}>8</button>
        <button onClick={() => handleClick('9')} style={styles.button}>9</button>
        <button onClick={() => handleClick('0')} style={styles.button}>0</button>

        <button onClick={handleCalculate} style={styles.button}>=</button>
        <button onClick={handleClear} style={styles.button}>C</button>
      </div>
    </div>
  );
}

// Styles for the calculator layout
const styles = {
  container: {
    maxWidth: '250px',
    margin: '50px auto',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  result: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#eee',
    borderRadius: '5px',
    fontSize: '20px',
    minHeight: '40px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    padding: '15px',
    fontSize: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Calculator;
