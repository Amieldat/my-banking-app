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
    const handleAccountModalToggle = () => {
        document.body.classList.toggle("modal-open")
        console.log(accountModalToggle)
        setAccountModalToggle(!accountModalToggle)
    }
    const handleExpenseModalToggle = () => {
        setExpenseModalToggle(!expenseModalToggle)
        document.body.classList.toggle("modal-open")
    }
    
    useEffect(() => {
        if (loggedIn == "") navigate("/")
    }, [loggedIn]) 

    const [users, setUsers] = useLocalStorage("users", [])
    const isAdmin = users.find(({ username }) => loggedIn == username)?.role == "admin"

    return (
        <div id="dashboard" className="dashboard-container">
            <div className="logout-button-container">
                <button onClick={() => setLoggedIn("")} className="logout-button">Log Out</button>
            </div>
            <h1>TMH Savings Bank</h1>
            <h2>Dashboard</h2>
            <h3>{loggedIn}</h3>
            {isAdmin 
                ? (
                    <>
                        <button onClick={handleAccountModalToggle}>Add Account</button>
                        <AccountList users={users} />
                        <AddAccount users={users} setUsers={setUsers} modalToggle={accountModalToggle} setModalToggle={handleAccountModalToggle}/>
                    </>
                )
                : (
                    <>
                        <button onClick={handleExpenseModalToggle} className="addExpense-button">Add Expense</button>
                        <Budget users={users} setUsers={setUsers} loggedIn={loggedIn} />
                        <AddExpense users={users} setUsers={setUsers} loggedIn={loggedIn} modalToggle={expenseModalToggle} setModalToggle={handleExpenseModalToggle} />
                    </>
                )}
            <div id="bank-container">
                <Deposit users={users} setUsers={setUsers} />
                <Withdraw users={users} setUsers={setUsers} />
                <Transfer users={users} setUsers={setUsers} />
            </div>
        </div>
    )
}