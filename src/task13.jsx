import React, { useState } from 'react';

function task13() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handle the input change event
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Real-Time Input Example</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..." 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default task13;