import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks'
import { AccountList, AddAccount, AddExpense, Budget, Deposit, Transfer, Withdraw } from '../sub-components'
import "../assets/css/Global.css"

export const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn")
    const navigate = useNavigate()
    const [accountModalToggle, setAccountModalToggle] = useState(false)
    const [expenseModalToggle, setExpenseModalToggle] = useState(false)
    
    useEffect(() => {
        if (loggedIn == "") navigate("/")
    }, [loggedIn]) 

    const [users, setUsers] = useLocalStorage("users", [])
    const isAdmin = users.find(({ username }) => loggedIn == username)?.role == "admin"

    return (
        <div id="dashboard" className="dashboard-container">
            <button onClick={() => setLoggedIn("")}>Log Out</button>
            <h2>Dashboard</h2>
            {isAdmin 
                ? (
                    <>
                        Admin
                        <button onClick={() => setAccountModalToggle(!accountModalToggle)}>Add Account</button>
                        <AccountList users={users} />
                        <AddAccount users={users} setUsers={setUsers} modalToggle={accountModalToggle}/>
                    </>
                )
                : (
                    <>
                        User
                        <button onClick={() => setExpenseModalToggle(!expenseModalToggle)} className="addExpense-button">Add Expense</button>
                        <Budget users={users} loggedIn={loggedIn} />
                        <AddExpense users={users} setUsers={setUsers} loggedIn={loggedIn} modalToggle={expenseModalToggle} />
                    </>
                )}
            <Deposit users={users} setUsers={setUsers} />
            <Withdraw users={users} setUsers={setUsers} />
            <Transfer users={users} setUsers={setUsers} />
        </div>
    )
}