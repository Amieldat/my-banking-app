import { useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks'
import "../assets/css/Universal.css"

export const Budget = ({ users, setUsers, loggedIn }) => {
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
    useEffect(() => {
      if (currentUser){
        if (expenses.length < currentUser.expenses.length) {
          const prevUsers = users.filter(({ username }) => (username != loggedIn))
          currentUser.expenses = expenses
          
          setUsers([...prevUsers, currentUser])
        }
      }
    }, [expenses])

  return (
    <div id="budget">
      <h2>Budget</h2>
      <div id="budget-table">
        <div>
          <span>Description</span>
          <span>Amount</span>
        </div>
        {expenses.map(({ description, amount }, i) => (
          <div key={i}>
            <span>{description}</span>
            <span>{amount}</span>
            <button className="delete-button" onClick={() => handleDeleteExpense(i)}> &#128465; {/* Unicode emoji for a trash can */}
            </button>
          </div>
      ))}
      </div>
    </div>
  )
}