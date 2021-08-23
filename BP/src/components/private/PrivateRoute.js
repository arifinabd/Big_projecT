import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {
  const isAuthenticate = true
  return isAuthenticate ? (
    <Route {...props} />
  ) : (
    <Redirect to="/" />
  )
}

export default PrivateRoute