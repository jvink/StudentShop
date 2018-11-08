import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Favorites from '../components/Favorites';
import DetailProduct from '../components/DetailProduct';
import ProductPage from '../components/ProductPage';
import NotFound from '../components/NotFound';

export default class Root extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
          <Route path='/product/:id' component={DetailProduct}/>
          <Route path='/category/:category/:subcategory' component={ProductPage}/>
          <Route path='/category/:category' component={ProductPage}/>
          <Route path='/' component={NotFound} />
      </Switch>
    );
  }
}