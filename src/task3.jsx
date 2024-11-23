import React from 'react';

const task3 = () => {
  // Array of user objects with name and email
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Mike Johnson', email: 'mike.johnson@example.com' },
    { name: 'Sara Wilson', email: 'sara.wilson@example.com' }
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>User Details Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default task3;