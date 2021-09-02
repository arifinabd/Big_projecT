import axios from 'axios'
import React, {useState} from 'react'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirm: ''
  })
  const handleFromChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/register/', form
      )
      if (res.data.code === 201) {
        alert('regist success')
      } else {
        alert('error register')
      }
    } catch (error) {
      if (error.response && error.response.data){
        alert(error.response.data)
      } else {
        alert(error.message)
      }
    }
  }
  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input type='text' placeholder='name' name='name' value={form.name} onChange={(e) => handleFromChange(e)}/>
        </div>
        <div>
          <input type='text' placeholder='username' name='username' value={form.username} onChange={(e) => handleFromChange(e)}/>
        </div>
        <div>
          <input type='password' placeholder='password' name='password' value={form.password} onChange={(e) => handleFromChange(e)}/>
        </div>
        <div>
          <input type='password' placeholder='confirm password' name='confirm' value={form.confirm} onChange={(e) => handleFromChange(e)}/>
        </div>
        <div>
          <button type='submit'>Signup</button>
        </div>
      </form>
      
    </div>
  )
}

export default Signup