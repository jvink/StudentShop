import React from 'react';
import '../../styles/product.css';

const PriceLabel = ({price}) => (
    <p className="productPriceLabel">€ {price}</p>
);

export default PriceLabel;