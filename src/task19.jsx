import React, { useState } from 'react';

function taskk19() {
  // State to manage multiple form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle change for any input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    console.log(formData); // Log form data to the console
    // You can further handle form submission here (e.g., sending data to an API)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Form Handling Example</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default task19;