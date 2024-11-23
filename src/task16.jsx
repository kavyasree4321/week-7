import React, { useState } from 'react';

function task16() {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Application</h1>
      
      {/* Display the current count */}
      <p style={{ fontSize: '30px' }}>Count: {count}</p>

      {/* Buttons to increment and decrement the count */}
      <div>
        <button
          onClick={increment}
          style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
        >
          Increment
        </button>
        
        <button
          onClick={decrement}
          style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default task16;