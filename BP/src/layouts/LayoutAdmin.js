import React from 'react';
import Navbar from '../components/navbar';

const LayoutAdmin = ({ children }) => {
  const menuData = [
    {to: '/admin', menuName: 'Home', exact: true},
    {to: '/admin/product', menuName: 'Products', exact: false},
    {to: '/admin/user', menuName: 'Users', exact: false},
  ]

  return (
    <div style={{background: 'cyan'}}>
      <Navbar isAdmin={true} menuData={menuData}/>
      <div>
        {children}
      </div>
      <h1>Footer</h1>

    </div>
  )
}

export default LayoutAdmin