import { useState } from 'react'

export const Deposit = ({ users, setUsers }) => {
    const [formData, setFormData] = useState({
        accountNumber: "",
        balance: 0
      })

    const handleChange = ({ currentTarget }) => {
        const data = formData
    
        for (const input of currentTarget.elements) {
          if (input.name !== null && input.name !== "") {
            data[input.name] = input.name == "balance"
                ? parseFloat(input.value)
                : input.value
          }
        }
    
        setFormData(data)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
    
        const { 
          accountNumber: formAccountNumber,
          balance
        } = formData
    
        const user = users.find(({ accountNumber }) => (accountNumber == formAccountNumber))
    
        if (!user) {
          alert("Account Number does not exist")
          return
        }

        if (balance < 0) {
            alert("Balance cannot be negative")
            return
        }

        user.balance += parseFloat(balance)
        const prevUsers = users.filter(({ accountNumber }) => (accountNumber != formAccountNumber))
    
        setUsers([...prevUsers, user])
        e.target.reset()
      }

    return (
        <>
            Deposit
            <br />
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="">Enter Account Number</label>
                <input id="enterAccountNumber" type="text" name="accountNumber" required />
                <br />

                <label htmlFor="">Enter an Amount</label>
                <input id="enterBalance" type="text" name="balance" required />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}
