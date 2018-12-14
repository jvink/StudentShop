import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Product from '../../components/Product';
import '../../styles/product.css';

class ProductContainer extends Component {

    componentDidMount() {
        let { category, subcategory, searchQuery } = this.props.match.params;
        this.props.productActions.getProducts(this.props.token, category, subcategory, searchQuery);
      }
   
    componentDidUpdate(prevProps) {
        let { category, subcategory, searchQuery } = this.props.match.params;
        if ((category && subcategory) && (prevProps.match.params.category !== category && prevProps.match.params.subcategory !== subcategory)) {
            this.props.productActions.getProducts(this.props.token, category, subcategory, null);
        } else if (category && (prevProps.match.params.category !== category && !subcategory)) {
            this.props.productActions.getProducts(this.props.token, category, null, null);
        } else if ((category && subcategory) && (prevProps.match.params.category === category && prevProps.match.params.subcategory !== subcategory)) {
            this.props.productActions.getProducts(this.props.token, category, subcategory, null);
        } else if ((searchQuery) && (prevProps.match.params.searchQuery !== searchQuery)) {
            this.props.productActions.getProducts(this.props.token, null, null, searchQuery);
        }
    }

    flipFavourites(productId) {
        if (this.props.token) {
            this.props.favouritesActions.flipFavourites(this.props.token, productId);
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        let { searchQuery } = this.props.match.params;
        if (this.props.productStore.isGettingProducts) {
            return <p>Loading Data...</p>
        } else if (this.props.productStore.getProductsResult) {
            return (
                <div>
                    {(searchQuery && (this.props.productStore.getProductsResult.length !== 0)) ? <p>Resultaten voor: <i><b>{searchQuery}</b></i></p> : null}
                    {(searchQuery && (this.props.productStore.getProductsResult.length === 0)) ? <p>Geen resultaten gevonden voor: <i><b>{searchQuery}</b></i></p> : null}
                    <div className="productsWrapper">
                        <Product flipFavourites={(productId) => this.flipFavourites(productId)} data={this.props.productStore.getProductsResult} token={this.props.token}/>
                    </div>
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