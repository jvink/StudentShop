import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import '../../styles/productItem.css';

export default class ProductItem extends Component {
    render() {
        const productItem = this.props.productItemData;
        return (
        <div className="productItem">
            <div className="productItemPrice">
                € {Math.round((productItem.price * 0.75) * 100) / 100}
            </div>
            <div className="productItemOldPrice">
                € {productItem.price}
            </div>
            <FavoriteIcon className="productItemFavorite"/>
            <a href={"product/" + productItem.id} className="productItemLink">
                <img src={productItem.imgUrl} alt={productItem.name} className="productItemImage"/>
                {productItem.name}
            </a>
        </div>
        );
    }
}