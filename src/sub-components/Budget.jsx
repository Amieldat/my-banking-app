import React, { useState } from 'react'
import "../assets/css/Universal.css"

export const Budget = ({ users, loggedIn }) => {
    const currentUser = users.find(({ username }) => username === loggedIn)
    const [expenses, setExpenses] = useState(currentUser?.expenses || [])

    const handleDeleteExpense = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this item?");

        if (confirmDelete) {
    const updatedExpenses = [...expenses]
    updatedExpenses.splice(index, 1)
    setExpenses(updatedExpenses)
        }
    }

  return (
    <div id="budget">
      <h2>Budget</h2>
      {expenses.map(({ description, amount }, i) => (
        <div key={i}>
          <span>{description}</span>
          <span>{amount}</span>
          <button className="delete-button" onClick={() => handleDeleteExpense(i)}> &#128465; {/* Unicode emoji for a trash can */}
          </button>
        </div>
      ))}
    </div>
  )
}