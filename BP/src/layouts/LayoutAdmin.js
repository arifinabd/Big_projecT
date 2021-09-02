import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './layout.scss'

const LayoutAdmin = ({ children, history }) => {
  const menuData = [
    {to: '/admin', menuName: 'Home', exact: true},
    {to: '/admin/product', menuName: 'Products', exact: false},
    // {to: '/admin/user', menuName: 'Users', exact: false},
  ]

  const dataLogin = JSON.parse(localStorage.getItem('dataAdmin'))
  const handleLogout = () => {
      localStorage.removeItem('dataAdmin')
      alert('LOGOUT BERHASIL')
      history.push('/admin')
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

export default withRouter(LayoutAdmin)