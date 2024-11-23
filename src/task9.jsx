import React, { useState } from 'react';

const task9 = () => {
  // State to manage error condition
  const [error, setError] = useState(false);

  // Toggle the error state (this could be based on some logic or event in a real app)
  const toggleError = () => {
    setError(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Form Submission</h1>
      <button onClick={toggleError}>
        {error ? 'Clear Error' : 'Trigger Error'}
      </button>

      {/* Conditionally render the error message */}
      {error && <p style={{ color: 'red' }}>An error has occurred. Please try again.</p>}
    </div>
  );
};

export default task9;