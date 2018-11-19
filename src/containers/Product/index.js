import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Product from '../../components/Product';

class ProductContainer extends Component {
    componentWillMount() {
        this.props.productActions.getProducts();
    }

    addToFavourites(productId) {
        this.props.favouritesActions.addToFavourites(1, productId);
    }

    render() {
        if (this.props.productStore.isGettingProducts) {
            return <p>Loading Data...</p>
        } else if (this.props.productStore.getProductsResult) {
            return (
                <div>
                    <Product addToFavourites={(productId) => this.addToFavourites(productId)} data={this.props.productStore.getProductsResult}/>
                </div>
            );
        } else if (this.props.productStore.productsError) {
            return <p>Data Error</p>;
        } else {
            return <p>Unknown Error</p>;
        }
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product,
        favouritesStore: state.favourites
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch),
        favouritesActions: favouritesActionCreator(dispatch)
    })
  )(ProductContainer));