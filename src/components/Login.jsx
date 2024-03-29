import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks'
import { Link } from 'react-router-dom'
import "../assets/css/Global.css"

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [usersLoaded, setUsersLoaded] = useLocalStorage("userLoaded", false)
  const [users, setUsers] = useLocalStorage("users", [])
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", "")

  useEffect(() => {
    if (!usersLoaded) {
      setUsers([
        {
          firstName: "admin",
          middleName: "admin",
          lastName: "admin",
          role: "admin",
          gender: "male", 
          accountType: "savings",
          accountNumber: "7777777",
          username: "admin",
          email: "admin@bank.com",
          password: "admin",
          confirmPassword: "admin",
          balance: 0, 
          expenses: []
        },
        {
          firstName: "Amiel",
          middleName: "Pogi",
          lastName: "Dats",
          role: "user",
          gender: "male",
          accountType: "savings",
          accountNumber: "1",
          username: "amieldat",
          email: "amiel@bank.com",
          password: "aa",
          confirmPassword: "aa",
          balance: 1000,
          expenses: [
            {
              description: "Transportation", 
              amount: 500
            },
            {
              description: "Groceries", 
              amount: 2000
            }
          ]
        },
        {
          firstName: "Epi",
          middleName: "Pogi",
          lastName: "Adonis",
          role: "user",
          gender: "male",
          accountType: "savings",
          accountNumber: "2",
          username: "Eps",
          email: "eps@bank.com",
          password: "bb",
          confirmPassword: "bb",
          balance: 1000,
          expenses: [
            {
              description: "Transportation", 
              amount: 1000
            },
            {
              description: "Groceries", 
              amount: 2000
            }
          ]
        }
      ])
      setUsersLoaded(true)
    }
  }, [])

  const handleChange = ({ currentTarget }) => {
    const data = {}

    for (const { name, value } of currentTarget.elements) {
      if (name !== null && name !== "") {
        data[name] = value
      }
    }

    setFormData(data)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const { 
      username: formUsername,
      password: formPassword
    } = formData
    const usernameExists = users.find(({ username }) => (username == formUsername))
    const passwordExists = users.find(({ password }) => (password == formPassword))

    if (!usernameExists || !passwordExists) {
      alert("Username and Password doesn't exist")
      return
    }

    setLoggedIn(formUsername)
    e.target.reset()
  }

  useEffect(() => {
    if (loggedIn?.length > 0) navigate("/dashboard")
  }, [loggedIn])

  return (
    <div id="login">
      <h1>TMH Savings Bank</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="userame">Username</label>
        <input id="userame" type="text" name="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
        <br />
        <input type="submit" />
      </form>
      <Link to="/signup">Sign up</Link>
    </div>
  )
}
