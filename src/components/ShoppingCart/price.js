import React from 'react';
import '../../styles/product.css';

const PriceLabel = ({price}) => (
    <p className="productPriceLabelOrder">€ {price}</p>
);

export default PriceLabel;