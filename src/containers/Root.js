import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import DetailProductContainer from '../containers/DetailProduct';
import FavouritesContainer from '../containers/Favourites';
import ProductContainer from '../containers/Product';
import NotFound from '../components/NotFound';
import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage';

export default class Root extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favourites' component={FavouritesContainer} />
          <Route path='/product/:id' component={DetailProductContainer}/>
          <Route path='/category/:category/:subcategory' component={ProductContainer}/>
          <Route path='/category/:category' component={ProductContainer} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path= '/login' component={LoginPage} />
          <Route path='/' component={NotFound} />
      </Switch>
    );
  }
}