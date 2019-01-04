import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import Products from '../../components/Products';

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.productActions.getAllProducts(this.props.token);
    }

    deleteProduct(productId) {
        this.props.productActions.deleteProduct(productId, this.props.token);
    }

    render() {
        if (this.props.productStore.isGettingAllProduct) {
            return <p>Loading Data...</p>
        } else if (this.props.productStore.getAllProductsResult) {
            return (
                <Products deleteProduct={(productId) => this.deleteProduct(productId)} products={this.props.productStore.getAllProductsResult}/>
            );
        } else if (this.props.productStore.getAllProductsError) {
            return <p>Data Error</p>;
        } else {
            return <p>Unknown Error</p>;
        }
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product,
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch),
    })
  )(ProductsContainer));