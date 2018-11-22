import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { toastr } from 'react-redux-toastr';
import Favorite from '@material-ui/icons/Favorite';
import '../../styles/product.css';

// const toastrOptions = {
//     icon: 'success',
//     status: 'success'
// };

class Favourites extends Component {
    render() {
        const { data } = this.props;
        return data.map((product) => {
            return (
                <div className="productWrapper" key={product.id}>
                    <p>{product.price}</p>
                    <div className="productFavorite" onClick={() => {this.props.removeFromFavourites(product.id)}}>
                        <Favorite/>
                    </div>
                    <Link to={"product/" + product.id} className="productLink">
                        <div className="productImageWrapper">{product.firstImg ? <img src={product.firstImg} alt={product.id} className="productImage"/> : <img src="https://raw.githubusercontent.com/jvink/project-c/master/src/images/no-image.jpg?token=AafImDyyZnKhuduvH2v0ac9GcDX5zhBhks5b8_FnwA%3D%3D" alt="NotFound" className="productImage"/>}</div>
                        <p>{product.name}</p>
                    </Link>
                </div>
            );
        });
    }
}

export default Favourites;