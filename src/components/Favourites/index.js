import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { toastr } from 'react-redux-toastr';
import HeartOffIcon from 'mdi-react/HeartOffIcon';
import PriceLabel from './price';
import ProductNameLabel from './name';
import '../../styles/product.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class Favourites extends Component {
    onClickRemoveFavourite(productId) {
        this.props.removeFromFavourites(productId);
        toastr.light('Uit favorieten verwijderd', toastrOptions);
    }

    render() {
        const { data } = this.props;
        if (data.length === 0) {
            return (
                <div>
                    <h1>U heeft geen favoriete producten</h1>
                    <p>Best wel leeg hier...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Uw favoriete producten</h1>
                    <div className="productsWrapper">
                        {data.map((product) => {
                        return (
                            <div className="productWrapper" key={product.id}>
                                <PriceLabel price={product.price}/>
                                <div className="productFavorite" onClick={() => {this.onClickRemoveFavourite(product.id)}}>
                                    <HeartOffIcon/>
                                </div>
                                <Link to={"product/" + product.id} className="productLink">
                                    <div className="productImageWrapper">{product.firstImg ? <img src={product.firstImg} alt={product.id} className="productImage"/> : <img src="https://raw.githubusercontent.com/jvink/project-c/master/src/images/no-image.jpg?token=AafImDyyZnKhuduvH2v0ac9GcDX5zhBhks5b8_FnwA%3D%3D" alt="NotFound" className="productImage"/>}</div>
                                    <ProductNameLabel name={product.name}/>
                                </Link>
                            </div>
                        );
                    })}
                    </div>
                </div>
            );
        }
    }
}

export default Favourites;