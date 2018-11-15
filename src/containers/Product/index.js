import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import Product from '../../components/Product';

class ProductContainer extends Component {
    componentWillMount() {
        this.props.productActions.getProducts();
    }

    render() {
        if (this.props.productStore.isGettingProducts) {
            return <p>Loading Data...</p>
        } else if (this.props.productStore.getProductsResult) {
            return (
                <div>
                    <Product data={this.props.productStore.getProductsResult}/>
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
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(ProductContainer));