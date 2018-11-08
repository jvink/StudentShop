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
        const productItem = this.props.productItemData;
        return (
            <div className="productItem">
                <PriceLabel price={productItem.price}/>
                <div className="productItemFavorite" onClick={() => {this.onChange()}}>
                    {this.state.isFavorite ? <Favorite className="isFavorite"/> : <FavoriteBorder/>}
                </div>
                <Link to={"product/" + productItem.id} className="productItemLink">
                    <img src={productItem.imgUrl} alt={productItem.name} className="productItemImage"/>
                    <ProductNameLabel name={productItem.name}/>
                </Link>
            </div>
        );
    }
}