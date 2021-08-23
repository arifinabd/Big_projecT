import React, {useState} from 'react'
import { withRouter } from 'react-router'

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const handleFormChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value
    })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const users = window.localStorage.getItem('users') && JSON.parse(window.localStorage.getItem('users'))
    const isLogin = users.find((val) => {
      return(val.username === form.username) && (val.password === form.password)
    })
    if (isLogin) {
        window.localStorage.setItem('dataLogin', JSON.stringify(isLogin))
        alert('SELAMAT DATANG')
        setForm({
          username: '',
          password: ''
        })
        props.history.push('/')
    } else {
        alert('GAGAL LOGIN')
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <input type="text" placeholder="username" name="username" value={form.username} onChange={(e) => handleFormChange(e)}/>
        </div>
        <div>
          <input type="password" placeholder="password" name="password" value={form.password} onChange={(e) => handleFormChange(e)}/>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form> 
    </div>
  )
}

export default withRouter(Login)