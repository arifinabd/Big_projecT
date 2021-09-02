import React, {useState} from 'react';

import Layout from '../../layouts/Layout';
import Login from '../auth/login';
import Signup from '../auth/signup';
import './style.scss'

const Auth = () => {
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
    <Layout>
      <div className='wrapper'>
        <div className='tab'>
          <h3 className='tab-item' onClick={() => setTab('register')}>SIGN UP</h3>
          <h3 className='tab-item' onClick={() => setTab('login')}>SIGN IN</h3>
        </div>
        <div className='tab-content'>
          {renderTab(tab)}
        </div>
      </div>
    </Layout>
  )
}

export default Auth