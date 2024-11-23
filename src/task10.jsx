import React, { useState } from 'react';

const task10 = () => {
  // State to manage the status of the process
  const [status, setStatus] = useState(''); // Possible values: 'processing', 'success', 'error'

  // Simulate changing the status based on some action (e.g., API call, form submission, etc.)
  const simulateStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  // Determine the message to display based on the status
  let message;
  if (status === 'processing') {
    message = <p style={{ color: 'blue' }}>Processing...</p>;
  } else if (status === 'success') {
    message = <p style={{ color: 'green' }}>Success!</p>;
  } else if (status === 'error') {
    message = <p style={{ color: 'red' }}>An error occurred. Please try again.</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Status Update</h1>
      <div>
        <button onClick={() => simulateStatusChange('processing')}>Start Processing</button>
        <button onClick={() => simulateStatusChange('success')}>Simulate Success</button>
        <button onClick={() => simulateStatusChange('error')}>Simulate Error</button>
      </div>
      <div>
        {message}
      </div>
    </div>
  );
};

export default task10;