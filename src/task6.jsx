import React, { useState } from 'react';

const task6 = () => {
  // State to track whether the text is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>This is the text that can be shown or hidden!</p>}
    </div>
  );
};

export default task6;