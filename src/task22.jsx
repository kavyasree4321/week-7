import React, { useState, useEffect, useRef } from 'react';

const task22= () => {
  // State to keep track of the current counter value
  const [count, setCount] = useState(0);

  // useRef to keep track of the previous count value
  const prevCountRef = useRef();

  // Update the previous count value on every render
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]); // Runs whenever `count` changes

  // Get the previous count value from the ref
  const prevCount = prevCountRef.current;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <h2>Previous Count: {prevCount}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default task22;
