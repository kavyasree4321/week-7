import React, { useState } from 'react';

function Task17() {
  // State to manage visibility of the image/paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility on button click
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toggle Visibility Example</h1>

      {/* Toggle Button */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {/* Conditionally render image or paragraph */}
      {isVisible && (
        <div style={{ marginTop: '20px' }}>
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            style={{ width: '300px', height: 'auto' }}
          />
          {/* Or, you can use a paragraph instead of an image */}
          {/* <p>This is a paragraph that will be shown or hidden.</p> */}
        </div>
      )}
    </div>
  );
}

export default task17;