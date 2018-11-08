import React, { Component } from 'react';
import Product from '../../containers/Product';
import '../../styles/productPage.css';

class ProductPage extends Component {

  render() {
    return (
      <div className="productWrapper">
        <Product display="column"/>
      </div>
    );
  }
}

export default ProductPage;