import React from 'react';
import '../../styles/productItem.css';

const PriceLabel = ({price}) => (
    <div className="productItemPrice">€ {price}</div>
);

export default PriceLabel;