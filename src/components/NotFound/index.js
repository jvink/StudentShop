import React, { Component } from 'react';
import { connect } from 'react-redux';
import productActionCreator from '../../store/actionCreators/product';

class NotFound extends Component {
  componentWillMount() {
    this.props.productActions.getProduct();
  }

  render() {
    if (this.props.productStore.isGettingProducts) {
      return <p>Loading..</p>
    } else {
      if (this.props.productStore.getProductResult) {
        return (
          <div>
            {this.props.productStore.getProductResult.map((product) => {
              return <p>{product.name}</p>
            })}
          </div>
        );
      } else {
        return <p>Not Found</p>
      }
    }
  }
}

export default connect(
  (state) => ({
      productStore: state.product
  }),
  (dispatch) => ({
      productActions: productActionCreator(dispatch)
  })
)(NotFound);