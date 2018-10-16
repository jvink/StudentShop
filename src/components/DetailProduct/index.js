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
        this.setState({data: json});
    }

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
    }

    render() {
        const currentProduct = this.state.data.find(x => (x.id === Number(this.props.match.params.id)));
        return (
            <div>
                <div className="wrapperDetailProductUpperInfo">
                    <img className="detailProductImage" alt={currentProduct.name} src={currentProduct.imgUrl}/>
                    <div className="detailProductInfo">
                        <div className="productTitle">
                            {currentProduct.name}
                        </div>
                        <div className="productInfoDivider"/>
                        <div className="productUpperInfoUpperWrapper">
                            <div className="productPrice">
                                {currentProduct.price}
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
                        Een A4 groot formaat agenda met een zachte laag over de harde kaft. Heeft een leeslint, een elastieken band. Een back to school agenda met een gebonden rug en 144 blaadjes. De taal is in het Nederlands. De inhoud is 7 dagen per 2 pagina,s. De schoolagenda heeft een formaat van 30.3 x 21.5 x 1.5 cm. Deze agenda 2018-2019 loopt van 23 juli 2018 tot 28 juli 2019 met één week verdeeld over twee pagina's. Lesrooster, cijferlijst en plaats voor notities ontbreken niet in deze super school-agenda. Een weekoverzicht over twee pagina’s en door de gebonden rug blijft de organizer goed open liggen. Bekijk ook onze schoolcampus 18-19 voor al je schoolspullen.
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;