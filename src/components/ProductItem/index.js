import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { toastr } from 'react-redux-toastr';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import PriceLabel from './price';
import ProductNameLabel from './name';
import '../../styles/productItem.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

export default class ProductItem extends Component {
    state = {
        isFavorite: false
    };

    onChange() {
        let { isFavorite } = this.state;
        this.setState({isFavorite: !isFavorite});
        isFavorite ? toastr.light('Uit favorieten verwijderd', toastrOptions) : toastr.light('Aan favorieten toegevoegd', toastrOptions);
    }

    render() {
        

        return (
            <div>
                {this.renderDisplay()}
            </div>
        )
    }

    renderDisplay() {
        const { display } = this.props;
        switch (display) {
            case "column":
                return this.blockDisplay();
            case "horizontal":
                return this.horizontalDisplay();
            default:
                return this.blockDisplay();
        }
    }

    blockDisplay() {
        const productItem = this.props.productItemData;
        console.log(productItem);
        return (
            <div className="productItem">
                <PriceLabel price={productItem.product.price}/>
                <div className="productItemFavorite" onClick={() => {this.onChange()}}>
                    {this.state.isFavorite ? <Favorite className="isFavorite"/> : <FavoriteBorder/>}
                </div>
                <Link to={"product/" + productItem.product.id} className="productItemLink">
                    {productItem.image[0] ? <img src={productItem.image[0]} alt={productItem.product.id} className="productItemImage"/> : <img src="https://www.unesale.com/ProductImages/Large/notfound.png" alt="NotFound" className="productItemImage"/>}
                    <ProductNameLabel display={this.props.display} name={productItem.product.name}/>
                </Link>
            </div>
        );
    }

    horizontalDisplay() {
        const productItem = this.props.productItemData;
        return (
            <div className="productItemHorizontal">
                <PriceLabel price={productItem.price}/>
                <Link to={"product/" + productItem.id} className="productItemLinkHorizontal">
                    <img src={productItem.imgUrl} alt={productItem.name} className="productItemImageHorizontal"/>
                    <ProductNameLabel display={this.props.display} name={productItem.name}/>
                </Link>
            </div>
        );
    }
}