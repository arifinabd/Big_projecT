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
  const handleSubmit = (e) => {
    e.preventDefault()
    const users = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : []
    users.push(form)
    window.localStorage.setItem('users', JSON.stringify(users))
    setForm({
      name: '',
      username: '',
      password: '',
      confirm: ''
    })
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