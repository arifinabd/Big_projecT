import React, {useState} from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

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
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        'http://localhost:8000/auth/login/', form
      )
      const {data: dataLogin, code} = data
      if (code === 200){
        localStorage.setItem('dataLogin', JSON.stringify(dataLogin))
        localStorage.setItem('isLogin', true)
        props.history.push('/')
      } else {
        alert('error login')
      }
    } catch (error) {
      if (error.response && error.response.data){
        alert('username n password not valid')
      } else {
        alert(error.message)
      }
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