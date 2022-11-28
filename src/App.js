import './App.css';
// import axios from 'axios'
import Login from './components/buttons/Login';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
// import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

import { useState, useEffect } from 'react';
import RegisterLoginPage from './components/RegisterLoginPage';
import Admin from './components/Admin';
import AfterCheckout from './components/AfterCheckout';

function App() {
  const [_user, _setUser] = useState(null);

  useEffect(() => {
    console.log(`useEffect`, _user);
  }, [_user]);

  return (
    <>
      { _user === null ? <RegisterLoginPage props={{_setUser}} /> : (
        _user.type === 'Admin' ? <Admin /> : <>
        <Header props={{_setUser}} />
          <Switch>
            {/* <Route exact path="/axios" element={axios} /> */}
            <Route exact path="/login" element={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Product} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route exact path="/checkout" component={Checkout} /> */}
            <Route exact path="/checkout">
              <Checkout props={{_user}} />
            </Route>
            <Route exact path="/afterCheckout">
              <AfterCheckout props={{_user}} />
            </Route>
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Redirect to="/" />
          </Switch>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
