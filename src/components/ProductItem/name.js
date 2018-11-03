import React from 'react';
import '../../styles/productItem.css';

const ProductNameLabel = ({name}) => (
    <div className="productName">
        {name}
    </div>
);

export default ProductNameLabel;