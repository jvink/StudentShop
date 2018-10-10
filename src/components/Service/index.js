import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import '../../styles/service.css';

class Service extends Component {
    render() {
        const service = this.props.serviceData;
        return (
        <div className="serviceItem">
            <div className="serviceItemPrice">
                € {service.price}
            </div>
            <div className="serviceItemOldPrice">
                € 20,99
            </div>
            <FavoriteIcon className="serviceItemFavorite"/>
            <img src={service.imgUrl} alt={service.name} className="serviceItemImage"/>
            {service.id}
            {service.name}
        </div>
        );
    }
}

export default Service;