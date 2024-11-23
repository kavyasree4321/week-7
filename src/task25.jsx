import React, { useRef } from 'react';

const task25 = () => {
  // Create a ref to the target section
  const sectionRef = useRef(null);

  // Function to handle scroll when the button is clicked
  const scrollToSection = () => {
    // Scroll to the section using scrollIntoView()
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Button that triggers the scroll */}
      <button onClick={scrollToSection}>Go to Section</button>

      {/* Some content before the section */}
      <div style={{ height: '100vh' }}>
        <h1>Scroll to the Section</h1>
        <p>Scroll down to see the section.</p>
      </div>

      {/* The section to scroll to */}
      <div ref={sectionRef} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>This is the target section</h2>
        <p>You have successfully scrolled here!</p>
      </div>
    </div>
  );
};

export default task25;
