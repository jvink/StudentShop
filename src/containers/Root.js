import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import DetailProductContainer from '../containers/DetailProduct';
import FavouritesContainer from '../containers/Favourites';
import ProductContainer from '../containers/Product';
import NotFound from '../components/NotFound';
import LoginContainer from '../containers/Login';
import RegisterContainer from '../containers/Register';
import ShoppingCartContainer from '../containers/ShoppingCart';
import AccountContainer from '../containers/Account';
import AddProductContainer from '../containers/AddProduct';
import AddImagesToProductContainer from '../containers/AddImagesToProduct';
import UsersContainer from '../containers/Users';
import ProductsContainer from '../containers/Products';
import StatisticsContainer from '../containers/Statistics';
import OrderHistoryContainer from '../containers/OrderHistory';

export default class Root extends Component {
  render() {
    let token = localStorage.getItem("USER");
    return (
      <Switch>
          <Route exact path='/' component={() => <Home token={token}/>} />
          <Route exact path='/favourites' component={() => <FavouritesContainer token={token}/>} />
          <Route exact path='/cart' component={() => <ShoppingCartContainer token={token}/>} />
          <Route path='/product/:id' component={() => <DetailProductContainer token={token}/>}/>
          <Route path='/results/:searchQuery' component={() => <ProductContainer token={token}/>}/>
          <Route path='/category/:category/:subcategory' component={() => <ProductContainer token={token}/>}/>
          <Route path='/category/:category' component={() => <ProductContainer token={token}/>} />
          <Route exact path='/login' component={() => <LoginContainer token={token}/>} />
          <Route exact path='/register' component={() => <RegisterContainer token={token}/>} />
          <Route exact path='/account' component={() => <AccountContainer token={token}/>} />
          <Route exact path='/addProduct' component={() => <AddProductContainer token={token}/>} />
          <Route exact path='/manageImages/:id' component={() => <AddImagesToProductContainer token={token}/>} />
          <Route exact path='/users' component={() => <UsersContainer token={token}/>} />
          <Route exact path='/products' component={() => <ProductsContainer token={token}/>} />
          <Route exact path='/statistics' component={() => <StatisticsContainer token={token}/>} />
          <Route exact path='/orderhistory' component={() => <OrderHistoryContainer token={token}/>} />
          <Route path='/' component={NotFound} />
      </Switch>
    );
  }
}