import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import '../../styles/detailproduct.css';
import RightArrowIcon from '@material-ui/icons/ChevronRight';
import LeftArrowIcon from '@material-ui/icons/ChevronLeft';
import { IconButton } from '@material-ui/core';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 0,
          picurl: 0
        };

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
    }
    
    changeUrl(plusOne, oldPicurl){
        console.log(plusOne);
        if (plusOne === false && oldPicurl === 0) {
            let newPicurl=this.props.product[0].image.length -1
            this.setState({picurl: newPicurl})
        } else if (plusOne === true && oldPicurl === this.props.product[0].image.length - 1){
            let newPicurl=0
            this.setState({picurl: newPicurl})
        } else if (plusOne === true) {
            let newPicurl= oldPicurl + 1
            this.setState({picurl: newPicurl})
        } else if (plusOne === false) {
            let newPicurl= oldPicurl - 1
            this.setState({picurl: newPicurl})
        }
    }

    render() {
        const product = this.props.product && this.props.product.length !== 0 ? this.props.product[0] : null;
        console.log(product.image[this.state.picurl])
        return (
            <div>
                <div className="wrapperDetailProductUpperInfo">
                    <div className="wrapperProductImage">
                        <img className="detailProductImage" alt={product.product.name} src={product.image[this.state.picurl].url}/>
                    </div>
                    <div className="detailProductInfo">
                        <div className="productTitle">
                            {product.product.name}
                        </div>
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
                                <FavoriteIcon className="productAddToFavoriteButton" />
                                <div className="productInfoDivider" />
                                <div className="productDescription">
                        {product.product.description}
                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="wrapperArrowButtons">
                        <IconButton className="LeftArrowButton" onClick={() => this.changeUrl(false, this.state.picurl)}><LeftArrowIcon/></IconButton> 
                        <IconButton style={{marginLeft: '8em'}} onClick={() => this.changeUrl(true, this.state.picurl)}><RightArrowIcon/></IconButton>  
                </div>
                </div>

        );
    }
}

export default DetailProduct;