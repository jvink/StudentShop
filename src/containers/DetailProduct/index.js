import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import DetailProduct from '../../components/DetailProduct';

class DetailProductContainer extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        productId: this.props.match ? this.props.match.params.id : null
    };
}

    componentWillMount() {
        this.props.productActions.getProduct(this.state.productId);
    }

    flipFavourites(productId) {
        this.props.favouritesActions.flipFavourites(this.state.token, productId);
    }

    render() {
        if (this.props.productStore.getProductResult) {
            return <DetailProduct product={this.props.productStore.getProductResult} />
        } else if (this.props.productStore.isGettingProduct) {
            return <p>Loading..</p>
        } else if (this.props.productStore.productError) {
            return <p>Could not receive products</p>
        } else {
            return <p>400</p>
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
  )(DetailProductContainer));