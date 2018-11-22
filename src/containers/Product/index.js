import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Product from '../../components/Product';

class ProductContainer extends Component {
    componentDidMount() {
        let { category, subcategory, searchQuery } = this.props.match.params;
        this.props.productActions.getProducts(category, subcategory, searchQuery);
      }
   
    componentDidUpdate(prevProps) {
        let { category, subcategory, searchQuery } = this.props.match.params;
        if ((category && subcategory) && (prevProps.match.params.category !== category && prevProps.match.params.subcategory !== subcategory)) {
            this.props.productActions.getProducts(category, subcategory, null);
        } else if (category && (prevProps.match.params.category !== category && !subcategory)) {
            this.props.productActions.getProducts(category, null, null);
        } else if ((category && subcategory) && (prevProps.match.params.category === category && prevProps.match.params.subcategory !== subcategory)) {
            this.props.productActions.getProducts(category, subcategory, null);
        } else if ((searchQuery) && (prevProps.match.params.searchQuery !== searchQuery)) {
            this.props.productActions.getProducts(null, null, searchQuery);
        }
    }

    flipFavourites(productId) {
        this.props.favouritesActions.flipFavourites(1, productId);
    }

    render() {
        if (this.props.productStore.isGettingProducts) {
            return <p>Loading Data...</p>
        } else if (this.props.productStore.getProductsResult) {
            return (
                <div className="productsWrapper">
                    <Product flipFavourites={(productId) => this.flipFavourites(productId)} data={this.props.productStore.getProductsResult}/>
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