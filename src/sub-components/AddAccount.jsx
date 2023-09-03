import { useState } from 'react'

export const AddAccount = ({ users, setUsers, modalToggle }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "female",
        accountType: "savings", 
        accountNumber: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        balance: 0,
        expenses: []
    })

    const radios = {
        accountType: {
            savings: "savings",
            current: "current"
        },
        gender: {
            female: "female",
            male: "male"
        }
    }

    const handleChange = ({ currentTarget, target }) => {
        const data = formData
        let inputId = target.type == "radio" && target.id
    
        for (const input of currentTarget.elements) {
          if (input.name !== null && input.name !== "") {
            data[input.name] = input.type == "radio" && radios[input.name][inputId]
              ? radios[input.name][inputId]
              : input.type == "radio" 
                ? data[input.name]
                : input.name == "balance" 
                    ? parseFloat(input.value)
                    : input.value 
          }
        }
    
        setFormData(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const { 
            username: formUsername,
            email: formEmail,
            balance
        } = formData
    
        const usernameExists = users.find(({ username }) => (username == formUsername))

        if (usernameExists) {
            alert("Username already exist")
            return
        }
    
        const emailExists = users.find(({ email }) => (email == formEmail))
    
        if (emailExists) {
            alert("Email already exist")
            return
        }

        if (balance < 0) {
            alert("Balance cannot be negative")
            return
        }
    
        setUsers([...users, formData])
        e.target.reset()
    }

    return (
        <div id="addAccount" className={`modal-container ${modalToggle ? "show" : ""}`}>
            <div className="modal">
            <h2>Add Account</h2>
            <br />
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" name="firstName" required />
                <br />

                <label htmlFor="middleName">Middle Name</label>
                <input id="middleName" type="text" name="middleName" />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" required />
                <br />

                <label htmlFor="">Gender</label>
                <br />

                <label htmlFor="female">Female</label>
                <input id="female" type="radio" name="gender" defaultChecked />
                <label htmlFor="male">Male</label>
                <input id="male" type="radio" name="gender" />
                <br />

                <label htmlFor="">Account Type</label>
                <br />

                <label htmlFor="savings">Savings</label>
                <input id="savings" type="radio" name="accountType" defaultChecked />
                <label htmlFor="current">Current</label>
                <input id="current" type="radio" name="accountType" />
                <br />

                <label htmlFor="accountNumber">Account Number</label>
                <input id="accountNumber" type="text" name="accountNumber" required />
                <br />

                <label htmlFor="balance">Add Balance</label>
                <input id="balance" type="text" name="balance"/>
                <br />

                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" required />
                <br />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
                <br />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" required />
                <br />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" name="confirmPassword" required />
                <br />

                <input type="submit" />
            </form>
            </div>        
        </div>
    )
}
