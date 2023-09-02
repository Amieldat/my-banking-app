import { useState } from 'react'

export const AddExpense = ({ users, setUsers, loggedIn, modalToggle }) => {
    const currentUser = users.find(({ username }) => username == loggedIn)
    const currentUserExpenses = currentUser?.expenses

    const [formData, setFormData] = useState({
        description: "",
        amount: 0
    })

    const handleChange = ({ currentTarget }) => {
        const data = formData
    
        for (const input of currentTarget.elements) {
          if (input.name !== null && input.name !== "") {
            data[input.name] = input.name == "amount" 
                ? parseFloat(input.value)
                : input.value 
          }
        }
    
        setFormData(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const { 
            description: formDescription, 
            amount
        } = formData
    
        const descriptionExists = currentUserExpenses.find(({ description }) => (description == formDescription))

        if (descriptionExists) {
            alert("Description already exist")
            return
        }
    
        if (amount < 0) {
            alert("Amount cannot be negative")
            return
        }

        const prevUsers = users.filter(({ username }) => (username != loggedIn))
        currentUser.expenses = [...currentUserExpenses, formData]
    
        setUsers([...prevUsers, currentUser])
        e.target.reset()
    }

    return (
        <div id="addExpense" style={{ display: `${modalToggle ? "block" : "none"}` }}>
            Add Expense
            <br />
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" name="description" required />
                <br />
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" name="amount" required />
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}