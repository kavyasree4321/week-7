import React, { useState } from 'react';

function task12() {
  // State to control the background color
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}  // Trigger when mouse enters the box
      onMouseLeave={handleMouseLeave}  // Trigger when mouse leaves the box
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',  // Change color based on hover state
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        transition: 'background-color 0.3s ease', // Smooth color transition
      }}
    >
      <p>Hover over me!</p>
    </div>
  );
}

export default task12;