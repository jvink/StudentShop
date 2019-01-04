import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import productActionCreator from '../../store/actionCreators/product';
import categoryActionCreator from '../../store/actionCreators/category';
import AddProduct from '../../components/AddProduct';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const toastrOptionsError = {
    icon: 'error',
    status: 'error'
};

class AddProductContainer extends Component {

    componentWillMount() {
        this.props.categoryActions.getCategory();
    }

    async addProduct(product) {
        try {
            await this.props.productActions.addProduct(product, this.props.token);

            if (this.props.productStore.addProductResult) {
                this.props.history.push('/products');
                toastr.light('Product toegevoegd', toastrOptions);
            }
        } catch (error) {
            toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
        }
    }

    render() {
        if (this.props.categoryStore.isGettingCategory) {
            return <p>Loading</p>;
        } else if (this.props.categoryStore.categoryError) {
            return <p>Error</p>;
        } else if (this.props.categoryStore.getCategoryResult) {
            return <AddProduct error={false} loading={false} categories={this.props.categoryStore.getCategoryResult} addProduct={(product) => this.addProduct(product)}/>;
        } else {
            return <p>Error</p>;
        }
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product,
        categoryStore: state.category
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch),
        categoryActions: categoryActionCreator(dispatch)
    })
  )(AddProductContainer));