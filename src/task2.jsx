import React from 'react';

// Array of user objects with name and profile picture
const users = [
  { name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Jane Smith', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Mike Johnson', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Sara Wilson', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' }
];

const task2= () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {users.map((user, index) => (
        <div key={index} style={{ width: '200px', border: '1px solid #ccc', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
          <img
            src={user.profilePic}
            alt={user.name}
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default task2;