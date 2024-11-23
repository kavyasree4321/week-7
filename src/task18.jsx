import React, { useState } from 'react';

function task18() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Input State Example</h1>

      {/* Input field */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />

      {/* Displaying the input value dynamically */}
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default task18;