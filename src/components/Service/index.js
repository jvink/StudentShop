import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import '../../styles/service.css';

class Service extends Component {
    render() {
        const service = this.props.serviceData;
        return (
        <div className="serviceItem">
            <div className="serviceItemPrice">
                € {Math.round((service.price * 0.75) * 100) / 100}
            </div>
            <div className="serviceItemOldPrice">
                € {service.price}
            </div>
            <FavoriteIcon className="serviceItemFavorite"/>
            {/* <a href={"product/" + service.id} className="productItemLink"> */}
                <img src={service.imgUrl} alt={service.name} className="serviceItemImage"/>
                {service.name}
            {/* </a> */}
        </div>
        );
    }
}

export default Service;