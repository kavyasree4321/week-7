import React from 'react';

const task7 = () => {
  // Get the current hour (0-23)
  const currentHour = new Date().getHours();

  // Determine the greeting based on the time of day
  let greeting;
  if (currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default task7;