import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import categoryActionCreator from '../../store/actionCreators/category';
import AddProduct from '../../components/AddProduct';

class AddProductContainer extends Component {

    componentWillMount() {
        this.props.categoryActions.getCategory();
    }

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
        if (this.props.categoryStore.isGettingCategory) {
            return <p>Loading</p>;
        } else if (this.props.categoryStore.categoryError) {
            return <p>Error</p>;
        } else if (this.props.categoryStore.getCategoryResult) {
            return <AddProduct error={false} loading={false} categories={this.props.categoryStore.getCategoryResult}/>;
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