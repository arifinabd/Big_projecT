import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/mainpage'
import ProductPage from './pages/productPage';
import ShopPage from './pages/shopPage'
import CartPage from './pages/cart'
import AdminProduct from "./pages/admin/product";
import AdminHome from "./pages/admin/home";
import PrivateRoute from "./components/private/PrivateRoute";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={MainPage} exact path="/"/>
        <Route component={ProductPage} path="/productPage/:id"/>
        <Route component={ShopPage} path="/list-shop"/>
        <Route component={CartPage} path="/cart"/>
        <Route component={Auth} path="/auth"/>
        <PrivateRoute exact path="/admin" component={AdminHome} />
        <PrivateRoute exact path="/admin/product" component={AdminProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
