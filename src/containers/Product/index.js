import React, { Component } from 'react';
import { connect } from 'react-redux';
import productActionCreator from '../../store/actionCreators/product';

class Product extends Component {
    render() {
        const { category } = this.props.match,
            { subcategory } = this.props.match;
            
        return (
            <div>
                <p>{category ? 'Category: ' + category : ''}</p>
                <p>{subcategory ? 'Subcategory: ' + subcategory : ''}</p>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(Product);