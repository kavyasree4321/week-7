const task1 = () => {
  // Array of grocery items
  const groceries = ['Apples', 'Bananas', 'Carrots', 'Eggs', 'Milk'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Grocery List</h1>
      <ul>
        {/* Map over the groceries array and render each item in a <li> */}
        {groceries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default task1;