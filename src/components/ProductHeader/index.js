import React, { Component } from 'react';

export default class ProductHeader extends Component {
    render() {
        const { productHeaderData } = this.props;
        
        return (
            <div>
                {productHeaderData.category ? <h3>Category: {productHeaderData.category}</h3> : null}
                {productHeaderData.subcategory ? <h3>Subcategory: {productHeaderData.subcategory}</h3> : null}
            </div>
        );
    }
}