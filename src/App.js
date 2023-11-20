import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;