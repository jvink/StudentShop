import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import productActionCreator from '../../store/actionCreators/product';
import AddImagesToProduct from '../../components/AddImagesToProduct';
import CircularProgress from '@material-ui/core/CircularProgress';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const toastrOptionsError = {
    icon: 'error',
    status: 'error'
};

class AddImagesToProductContainer extends Component {

    componentWillMount() {
        this.props.productActions.getProduct(this.props.match.params.id ? this.props.match.params.id : null, this.props.token);
    }

    async addImagesToProduct(images, productId) {
        try {
            await this.props.productActions.addImagesToProduct(images, productId, this.props.token);

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
        if (this.props.productStore.getProductResult) {
            return <AddImagesToProduct currentProduct={this.props.productStore.getProductResult} error={false} loading={false} addImagesToProduct={(images, productId) => this.addImagesToProduct(images, productId)}/>;
        } else if (this.props.productStore.isGettingProduct) {
            return <CircularProgress/>
        } else if (this.props.productStore.productError) {
            return <p>Error</p>
        } else {
            return <p>Error</p>;
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
  )(AddImagesToProductContainer));