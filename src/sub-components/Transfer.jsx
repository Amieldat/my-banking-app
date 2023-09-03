import { useState } from 'react'
import "../assets/css/Universal.css"

export const Transfer = ({ users, setUsers }) => {
    const [formData, setFormData] = useState({
        accountNumberSender: "",
        accountNumberReceiver: "",
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
          accountNumberSender,
          accountNumberReceiver,
          balance
        } = formData
    
        const sender = users.find(({ accountNumber }) => (accountNumber == accountNumberSender))
        const receiver = users.find(({ accountNumber }) => (accountNumber == accountNumberReceiver))
    

        if (!sender) {
          alert("Sender Account Number does not exist")
          return
        }

        if (!receiver) {
            alert("Receiver Account Number does not exist")
            return
        }

        if (balance < 0) {
            alert("Balance cannot be negative")
            return
        }

        sender.balance -= parseFloat(balance)
        receiver.balance += parseFloat(balance)
        const prevUsers = users.filter(({ accountNumber }) => (accountNumber != accountNumberSender && accountNumber != accountNumberReceiver))
    
        setUsers([...prevUsers, sender, receiver])
        e.target.reset()
      }

    return (
        <div id="transfer" className="transfer-container">
            <h2>Transfer</h2>
            <br />
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="">Enter Sender Account Number</label>
                <input id="enterAccountNumberSender" type="text" name="accountNumberSender" required />
                <br />

                <label htmlFor="">Enter Receiver Account Number</label>
                <input id="enterAccountNumberReceiver" type="text" name="accountNumberReceiver" required />
                <br />

                <label htmlFor="">Enter an Amount</label>
                <input id="enterBalance" type="text" name="balance" required />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}
