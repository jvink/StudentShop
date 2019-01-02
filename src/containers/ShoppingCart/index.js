import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cartActionCreator from '../../store/actionCreators/cart';
import ShoppingCart from '../../components/ShoppingCart';
import '../../styles/product.css';

class ShoppingCartContainer extends Component {

    componentDidMount() {
        if (this.props.token) {
            this.props.cartActions.getCart(this.props.token);
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        if (this.props.cartStore.isGettingCart) {
            return <p>Loading..</p>
        } else if (this.props.cartStore.getCartResult) {
            return (
                <div className="productsWrapper">
                    <ShoppingCart data={this.props.cartStore.getCartResult}/>
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