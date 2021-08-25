import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './layout.scss'

const Layout = ({ children, history }) => {
  const menuData = [
    {to: '/', menuName: 'Home', exact: true},
    {to: '/list-shop', menuName: 'Shop', exact: false},
    {to: '/cart', menuName: 'Cart', exact: false},
    // {to: '/auth', menuName: 'Login | Signup', exact: false},
  ]
  const dataLogin = window.localStorage.getItem('dataLogin') && JSON.parse(window.localStorage.getItem('dataLogin'))
  console.log(history)
  const handleLogout = () => {
      window.localStorage.removeItem('dataLogin')
      alert('LOGOUT BERHASIL')
      history.push('/')
  }
  return (
    <div>
      <div className='layout'>
        <Navbar menuData={menuData}/>
        <ul>
            <li>
                {dataLogin ? (
                  <a className='cursor' onClick={handleLogout}>Logout</a>    
                  ) : (
                    <NavLink to='/auth'>Login | signup</NavLink>
                    )}
            </li>
            <li>{dataLogin && (<span>| Hallo {dataLogin.name}</span>)}</li>
        </ul>
      </div>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
export default withRouter(Layout)
