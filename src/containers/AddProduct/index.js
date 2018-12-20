import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import AddProduct from '../../components/AddProduct';

class AddProductContainer extends Component {

    async AddProduct(token, product) {
        try {
            await this.props.productActions.AddProduct(token, product);

            if (this.props.userStore.editUserResult) {
                console.log('Done');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <AddProduct/>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(AddProductContainer));