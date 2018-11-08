import React from 'react';
import '../../styles/productItem.css';

const ProductNameLabel = ({display, name}) => {
    switch (display) {
        case "column":
            return <div className="productName">{name}</div>
        case "horizontal":
            return <div className="productNameHorizontal">{name}</div>
        default:
            return <div className="productName">{name}</div>
    }
};

export default ProductNameLabel;