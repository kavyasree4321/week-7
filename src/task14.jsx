import React, { useState } from 'react';

function task14() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle form input change
  const task14 = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from reloading the page
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Submit Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default task14.jsx