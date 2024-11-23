import React from 'react';

const task4 = () => {
  // Array of categories, each with a name and a list of items
  const categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange', 'Mango']
    },
    {
      name: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Spinach', 'Potato']
    },
    {
      name: 'Dairy',
      items: ['Milk', 'Cheese', 'Yogurt']
    }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Categories and Items</h1>
      <div>
        {categories.map((category, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{category.name}</h2>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default task4;