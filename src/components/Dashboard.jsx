import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks'
import { AccountList, AddAccount, Deposit, Transfer, Withdraw } from '../sub-components'

export const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn")
    const navigate = useNavigate()
    const [modalToggle, setModalToggle] = useState(false)

    useEffect(() => {
        if (loggedIn == "") navigate("/")
    }, [loggedIn]) 

    const [users, setUsers] = useLocalStorage("users", [])


    return (
        <>
            <button onClick={() => setLoggedIn("")}>Log Out</button>
            dashboard
            <button onClick={() => setModalToggle(!modalToggle)}>Add Account</button>
            <AccountList users={users} />
            <Deposit users={users} setUsers={setUsers} /> 
            <Withdraw users={users} setUsers={setUsers} />
            <Transfer users={users} setUsers={setUsers} />
            <AddAccount users={users} setUsers={setUsers} modalToggle={modalToggle} />
        </>
    )
}