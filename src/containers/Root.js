import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import DetailProduct from '../components/DetailProduct';
import Product from '../containers/Product';
import NotFound from '../components/NotFound';

class Root extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/product/:id' component={DetailProduct}/>
            <Route path='/category/:category/:subcategory' component={Product}/>
            <Route path='/category/:category' component={Product}/>
            <Route path='/' component={NotFound} />
        </Switch>
      );
    }
}

export default Root;