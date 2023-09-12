import { useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks'
import "../assets/css/Universal.css"

export const Budget = ({ users, setUsers, loggedIn }) => {
    const currentUser = users.find(({ username }) => username === loggedIn)
    const [expenses, setExpenses] = useState(currentUser?.expenses || [])
    const [resetExpenses, setResetExpenses] = useState(false)

    const handleDeleteExpense = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this item?")

        if (confirmDelete) {
    const updatedExpenses = [...expenses]
    updatedExpenses.splice(index, 1)
    setExpenses(updatedExpenses)
        }
    }

    const handleResetExpenses = () => {
      const confirmReset = window.confirm('Are you sure you want to reset your expenses?')
  
      if (confirmReset) {
        setExpenses([])
        setResetExpenses(true)
      }
    }

    useEffect(() => {
      if (currentUser){
        if (expenses.length < currentUser.expenses.length || resetExpenses) {
          const prevUsers = users.filter(({ username }) => (username != loggedIn))
          currentUser.expenses = expenses
          
          setUsers([...prevUsers, currentUser])
          setResetExpenses(false)
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
        {expenses.map(({ description, amount }, i) => (
          <div key={i}>
            <span>{description}</span>
            <span>{amount}</span>
            <button className="delete-button" onClick={() => handleDeleteExpense(i)}> &#128465;
            </button>
          </div>
      ))}
      </div>
      <button className="reset-button" onClick={handleResetExpenses}>
        Reset Expenses
      </button>
      </div>
    </div>
  )
}