import React, { useRef } from 'react';

const task21 = () => {
  // Create a ref for the input field
  const inputRef = useRef(null);

  // Function to focus on the input field
  const focusInput = () => {
    // Focus the input field using ref
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Focus Input Example</h1>
      
      {/* Input field with ref attached */}
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Click the button to focus" 
        style={{ padding: '10px', fontSize: '16px' }} 
      />
      
      <div style={{ marginTop: '20px' }}>
        {/* Button that triggers the focus */}
        <button onClick={focusInput}>Focus on Input</button>
      </div>
    </div>
  );
};

export default task21;
