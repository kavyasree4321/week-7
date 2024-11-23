import React, { useRef } from 'react';

const task24 = () => {
  // Create a ref for the input field
  const inputRef = useRef(null);

  // Function to handle form submission and access input value
  const handleSubmit = (event) => {
    event.preventDefault();
    // Accessing the value of the input through inputRef
    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Uncontrolled input field with ref */}
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Type something..." 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default task24;
