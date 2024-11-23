import React, { useState } from 'react';

function task15() {
  // State to store the current action message
  const [actionMessage, setActionMessage] = useState('');

  // Handle Add button click
  const handleAdd = () => {
    setActionMessage('Add button clicked');
  };

  // Handle Edit button click
  const handleEdit = () => {
    setActionMessage('Edit button clicked');
  };

  // Handle Delete button click
  const handleDelete = () => {
    setActionMessage('Delete button clicked');
  };

  return (
    <div>
      <h1>Dynamic Button Actions</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <p>{actionMessage}</p>
    </div>
  );
}

export default task15;