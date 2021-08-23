import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.scss'

const Navbar = ({isAdmin, menuData, history}) => {
  // const dataLogin = window.localStorage.getItem('dataLogin') && JSON.parse(window.localStorage.getItem('dataLogin'))
  // console.log(history)
  // const handleLogout = () => {
  //     window.localStorage.removeItem('dataLogin')
  //     alert('LOGOUT BERHASIL')
  //     history.push('/')
  // }
  return (
    <>
      {isAdmin ? <div className="titlenav">Admin Page</div> : <div className="titlenav"></div>}
        <div className='nav'>
            <ul>
              {/* <li>{dataLogin && (<span>Hallo {dataLogin.name}</span>)}</li> */}
              {menuData.map((val, key) => {
                return(
                  <li>
                    <NavLink key={key} exact={val.exact} to={val.to}>{val.menuName}</NavLink>
                  </li>
                )
              })}
              {/* <li>
                    {dataLogin ? (
                        <a className='cursor' onClick={handleLogout}>Logout</a>    
                    ) : (
                        <NavLink to='/auth'>Login | signup</NavLink>
                    )}
                    
              </li> */}
            </ul>
        </div>  
    </>
  )
}

export default withRouter(Navbar)

