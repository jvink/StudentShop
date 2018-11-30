import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import notFoundImage from '../../images/no-image.jpg';
import '../../styles/detailproduct.css';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 0
        };

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
    }

    render() {
        const product = this.props.product && this.props.product.length !== 0 ? this.props.product[0] : null;

        return (
            <div>
                <div className="wrapperDetailProductUpperInfo">
                {product.firstImg ? <img src={product.firstImg} alt={product.id} className="detailProductImage"/> : <img src={notFoundImage} alt="NotFound" className="productImage"/>}
                    <div className="detailProductInfo">
                        <div className="productTitle">
                            {product.product.name}
                        </div>
                        <div className="productInfoDivider"/>
                        <div className="productUpperInfoUpperWrapper">
                            <div className="productPrice">
                                €{product.product.price}
                            </div>
                            <div style={{textAlign: 'right', width: '100%'}}>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#f1c40f"
                                    starHoverColor="#f39c12"
                                    starDimension="2em"
                                    starSpacing="0px"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                />
                                <AddShoppingCartOutlined className="productAddToShoppingCartButton"/>
                                <FavoriteIcon className="productAddToFavoriteButton"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="wrapperDetailProductLowerInfo">
                    <div className="productDescription">
                        {product.product.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;