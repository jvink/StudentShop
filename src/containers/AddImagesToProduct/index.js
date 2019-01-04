import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import productActionCreator from '../../store/actionCreators/product';
import AddImagesToProduct from '../../components/AddImagesToProduct';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const toastrOptionsError = {
    icon: 'error',
    status: 'error'
};

class AddImagesToProductContainer extends Component {

    async addImagesToProduct(images, productId) {
        try {
            await this.props.productActions.addImagesToProduct(images, 2, this.props.token);

            if (this.props.productStore.addImagesToProductResult) {
                this.props.history.push('/products');
                toastr.light('Afbeeldingen toegevoegd', toastrOptions);
            } else {
                toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
            }
        } catch (error) {
            toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
        }
    }

    render() {
        return <AddImagesToProduct error={false} loading={false} addImagesToProduct={(images, productId) => this.addImagesToProduct(images, productId)}/>;
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(AddImagesToProductContainer));