import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PriceLabel from './price';
import ProductNameLabel from './name';
import '../../styles/product.css';

class ShoppingCart extends Component {

    render() {
        const { data } = this.props;
        if (data.length === 0) {
            return (
                <div>
                    <h1>U heeft geen producten in uw winkelwagentje</h1>
                    <p>Best wel leeg hier...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Uw winkelwagentje</h1>
                    <div className="productsWrapper">
                        {data.map((product) => {
                        return (
                            <div className="productWrapper" key={product.id}>
                                <PriceLabel price={product.price}/>
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

export default ShoppingCart;