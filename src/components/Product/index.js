import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { toastr } from 'react-redux-toastr';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import PriceLabel from './price';
import ProductNameLabel from './name';
import '../../styles/product.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class Product extends Component {
    state = {
        isFavorite: false
    };

    onChange() {
        let { isFavorite } = this.state;
        this.setState({isFavorite: !isFavorite});
        isFavorite ? toastr.light('Uit favorieten verwijderd', toastrOptions) : toastr.light('Aan favorieten toegevoegd', toastrOptions);
    }

    render() {
        const { data } = this.props;
        
        return data.map((products) => {
            return (
                <div className="productWrapper" key={products.id}>
                    <PriceLabel price={products.price}/>
                    <div className="productFavorite" onClick={() => {this.onChange()}}>
                        {this.state.isFavorite ? <Favorite className="isFavorite"/> : <FavoriteBorder/>}
                    </div>
                    <Link to={"product/" + products.id} className="productLink">
                        {products.firstImg ? <img src={products.firstImg} alt={products.id} className="productImage"/> : <img src="https://raw.githubusercontent.com/jvink/project-c/master/src/images/no-image.jpg?token=AafImDyyZnKhuduvH2v0ac9GcDX5zhBhks5b8_FnwA%3D%3D" alt="NotFound" className="productItemImage"/>}
                        <ProductNameLabel name={products.name}/>
                    </Link>
                </div>
            );
        });
}
}

export default Product;