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
    constructor(props) {
        super(props);

        this.state = {
            favs: []
        }
    }

    componentWillMount() {
        const { data } = this.props;
        data.map((product) => {
            return this.setState(prevState => ({
                favs: [...prevState.favs, {productId: product.id, isFav: product.isFavourite}]
            }));
        });
    }

    onChange(productId, isFavourite) {
        for (let i = 0; i < this.state.favs.length; i++) {
            if (this.state.favs[i].productId === productId) {
                var stateCopy = Object.assign({}, this.state);
                stateCopy.favs = stateCopy.favs.slice();
                stateCopy.favs[i] = Object.assign({}, stateCopy.favs[i]);
                stateCopy.favs[i].isFav = !stateCopy.favs[i].isFav;
                this.setState(stateCopy);
            }
        }
        this.props.flipFavourites(productId);
        isFavourite ? toastr.light('Uit favorieten verwijderd', toastrOptions) : toastr.light('Aan favorieten toegevoegd', toastrOptions);
    }

    isFavourite(productId) {
        for (let i = 0; i < this.state.favs.length; i++) {
            if (this.state.favs[i].productId === productId) {
                return this.state.favs[i].isFav;
            }
        }
    }

    render() {
        const { data } = this.props;
        return data.map((product) => {
            return (
                <div className="productWrapper" key={product.id}>
                    <PriceLabel price={product.price}/>
                    <div className="productFavorite" onClick={() => {this.onChange(product.id, this.isFavourite(product.id))}}>
                        {this.isFavourite(product.id) ? <Favorite className="isFavorite"/> : <FavoriteBorder/>}
                    </div>
                    <Link to={"product/" + product.id} className="productLink">
                        <div className="productImageWrapper">{product.firstImg ? <img src={product.firstImg} alt={product.id} className="productImage"/> : <img src="https://raw.githubusercontent.com/jvink/project-c/master/src/images/no-image.jpg?token=AafImDyyZnKhuduvH2v0ac9GcDX5zhBhks5b8_FnwA%3D%3D" alt="NotFound" className="productImage"/>}</div>
                        <ProductNameLabel name={product.name}/>
                    </Link>
                </div>
            );
        });
    }
}

export default Product;