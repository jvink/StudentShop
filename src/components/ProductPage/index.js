import React, { Component } from 'react';
import Product from '../../containers/Product';
import '../../styles/productPage.css';

class ProductPage extends Component {

  render() {
    //   console.log(this.props.category);
    return (
      <div className="productWrapper">
        <Product />
      </div>
    );
  }
}

export default ProductPage;