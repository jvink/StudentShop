import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cartActionCreator from '../../store/actionCreators/cart';
import ShoppingCart from '../../components/ShoppingCart';
import OrderDone from '../../components/OrderDone';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../styles/product.css';

class ShoppingCartContainer extends Component {

    componentDidMount() {
        if (this.props.token) {
            this.props.cartActions.getCart(this.props.token);
        } else {
            this.props.history.push('/login');
        }
    }

    removeFromCart(productId) {
        this.props.cartActions.deleteSingleFromCart(productId, this.props.token);
    }

    removeAllFromCart() {
        this.props.cartActions.deleteAllFromCart(this.props.token);
    }

    payProductsFromCart() {
        this.props.cartActions.payProductsFromCart(this.props.token);
    }

    render() {
        if (this.props.cartStore.isPayingCart) {
            return  <div style={{width: '100%', textAlign: 'center', margin: '2em'}}><CircularProgress/><h4>Bestelling aan het afronden...</h4></div>
        } else if (this.props.cartStore.payCartError) {
            return <p>Er is iets misgegaan met uw bestelling</p>
        } else if (this.props.cartStore.payCartResult) {
            return <OrderDone/>
        } else if (this.props.cartStore.isGettingCart) {
            return <p>Loading..</p>
        } else if (this.props.cartStore.getCartResult) {
            return (
                <div className="productsWrapper">
                    <ShoppingCart payProductsFromCart={() => this.payProductsFromCart()} removeAllFromCart={() => this.removeAllFromCart()} removeFromCart={(productId) => this.removeFromCart(productId)} data={this.props.cartStore.getCartResult}/>
                </div>
            );
        } else if (this.props.cartStore.getCartError) {
            return <p>Could not receive shopping cart items</p>
        } else {
            return <p>400</p>
        }
    }
}

export default withRouter(connect(
    (state) => ({
        cartStore: state.cart
    }),
    (dispatch) => ({
        cartActions: cartActionCreator(dispatch)
    })
  )(ShoppingCartContainer));