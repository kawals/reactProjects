import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cart' component={Cart}/>
    </Switch>
  )
}

export default Router;
