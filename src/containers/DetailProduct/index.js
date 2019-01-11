import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import cartActionCreator from '../../store/actionCreators/cart';
import DetailProduct from '../../components/DetailProduct';

class DetailProductContainer extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        productId: this.props.match ? this.props.match.params.id : null
    };
}

    componentWillMount() {
        this.props.productActions.getProduct(this.state.productId, this.props.token);
    }

    flipFavourites(productId) {
        this.props.favouritesActions.flipFavourites(this.props.token, productId);
    }

    addToCart(productId) {
        this.props.cartActions.addProductToCart(productId, 1, this.props.token);
    }

    render() {
        if (this.props.productStore.getProductResult) {
            return <DetailProduct product={this.props.productStore.getProductResult} addToCart={(productId) => this.addToCart(productId)} flipFavourites={(productId) => this.flipFavourites(productId)}/>
        } else if (this.props.productStore.isGettingProduct) {
            return <p>Loading..</p>
        } else if (this.props.productStore.productError) {
            return <p>Could not receive products</p>
        } else {
            return <p>400</p>
        }
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product,
        favouritesStore: state.favourites,
        cartStore: state.cart
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch),
        favouritesActions: favouritesActionCreator(dispatch),
        cartActions: cartActionCreator(dispatch)
    })
  )(DetailProductContainer));