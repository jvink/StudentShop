import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Favorites from '../components/Favorites';
import DetailProductContainer from '../containers/DetailProduct';
import FavoritesContainer from '../containers/Favorites';
import ProductPage from '../components/ProductPage';
import NotFound from '../components/NotFound';
import RegisterPage from '../components/RegisterPage'

export default class Root extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={FavoritesContainer} />
          <Route path='/product/:id' component={DetailProductContainer}/>
          <Route path='/category/:category/:subcategory' component={ProductPage}/>
          <Route path='/category/:category' component={ProductPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route path='/' component={NotFound} />
      </Switch>
    );
  }
}