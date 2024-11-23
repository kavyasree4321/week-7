import React, { useState, useRef } from 'react';

const task23 = () => {
  // State to keep track of elapsed time in seconds
  const [time, setTime] = useState(0);

  // useRef to store the timer ID
  const timerRef = useRef(null);

  // Function to start the stopwatch
  const startTimer = () => {
    // Prevent starting multiple intervals if it's already running
    if (timerRef.current !== null) return;

    // Set interval to update time every second
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  // Function to stop the stopwatch
  const stopTimer = () => {
    // Clear the interval when stopping the stopwatch
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null; // Reset the ref to null
    }
  };

  // Function to reset the stopwatch
  const resetTimer = () => {
    // Stop the timer and reset time to 0
    stopTimer();
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <p>{time} seconds</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default task23;
