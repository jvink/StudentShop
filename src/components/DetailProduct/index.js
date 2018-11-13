import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import '../../styles/detailproduct.css';
var json = require('../../mock.json');

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
          rating: 0
        };

        this.changeRating = this.changeRating.bind(this);
    }

    componentWillMount() {
        const foundProduct = json.find(x => (x.id === Number(this.props.match.params.id)));
        this.setState({
            product: foundProduct,
            //rating: foundProduct.rating
        });
    }

    changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <div className="wrapperDetailProductUpperInfo">
                    <img className="detailProductImage" alt={product.name} src={product.imgUrl}/>
                    <div className="detailProductInfo">
                        <div className="productTitle">
                            {product.name}
                        </div>
                        <div className="productInfoDivider"/>
                        <div className="productUpperInfoUpperWrapper">
                            <div className="productPrice">
                                €{product.price}
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
                        {product.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;