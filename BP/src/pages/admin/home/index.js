import React, {useState} from 'react';
import LayoutAdmin from '../../../layouts/LayoutAdmin';

import Login from '../home/login';
import Signup from '../home/signup';
import './style.scss'

const AdminHome = () => {
  const [tab, setTab] = useState('register')

  const renderTab = (tab) => {
    switch (tab) {
      case 'register':
          return <Signup/>
      case 'login' :
          return <Login/>
      default:
        break;
    }
  }
  return (
    <LayoutAdmin>
      <div className='wrapper'>
        <div className='tab'>
          <h3 className='tab-item' onClick={() => setTab('register')}>SIGN UP</h3>
          <h3 className='tab-item' onClick={() => setTab('login')}>SIGN IN</h3>
        </div>
        <div className='tab-content'>
          {renderTab(tab)}
        </div>
       </div>    
    </LayoutAdmin>
  )
}

export default AdminHome