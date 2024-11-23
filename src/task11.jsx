import React from 'react';

const task11= () => {
  // Function to handle button click
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default task11;