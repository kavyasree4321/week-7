import React, { useState, useRef } from 'react';
import { FaUtensils, FaPlane, FaShoppingBag } from 'react-icons/fa';  // Icons for categories
 import './project7.css'
const project7 = () => {
  const [expenses, setExpenses] = useState([]); // Track expenses list
  const [total, setTotal] = useState(0); // Track total expenditure
  const nameRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  // Add expense
  const addExpense = () => {
    const name = nameRef.current.value;
    const category = categoryRef.current.value;
    const amount = parseFloat(amountRef.current.value);

    if (!name || !category || isNaN(amount) || amount <= 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name,
      category,
      amount,
      date: new Date(),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setTotal((prevTotal) => prevTotal + amount);

    nameRef.current.value = "";
    categoryRef.current.value = "food";  // Default category
    amountRef.current.value = "";
    nameRef.current.focus(); // Focus back to the name field
  };

  // Remove expense
  const removeExpense = (id, amount) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
    setTotal((prevTotal) => prevTotal - amount);
  };

  return (
    <div className="App">
      <h1>Personal Expense Tracker</h1>

      {/* Expense Input Form */}
      <div>
        <input
          ref={nameRef}
          type="text"
          placeholder="Expense Name"
        />
        <select ref={categoryRef}>
          <option value="food">Food <FaUtensils /></option>
          <option value="travel">Travel <FaPlane /></option>
          <option value="shopping">Shopping <FaShoppingBag /></option>
        </select>
        <input
          ref={amountRef}
          type="number"
          placeholder="Amount"
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      {/* Display Expenses */}
      <div>
        {expenses.length === 0 ? (
          <p>No expenses logged yet.</p>
        ) : (
          <div>
            <h2>Expenses List</h2>
            <ul>
              {expenses.sort((a, b) => b.date - a.date).map((expense) => (
                <li key={expense.id}>
                  <span>{expense.name} </span>
                  <span>({expense.category}) </span>
                  <span>${expense.amount}</span>
                  <button onClick={() => removeExpense(expense.id, expense.amount)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Total Expenditure */}
      <div>
        <h3>Total Expenditure: ${total}</h3>
      </div>
    </div>
  );
};

export default project7;