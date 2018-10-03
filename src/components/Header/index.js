import React, { Component } from 'react';
import image from '../../images/header.png';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountIcon from '@material-ui/icons/Face';
import '../../styles/header.css';

class Header extends Component {
    render() {
        return (
        <div className="wrapper">
            <div className="itemsWrapper">
                <img src={image} className="logo" alt="headerImg"/>
                <input placeholder="Waar ben je naar op zoek?"/>
                <button className="searchButton"><SearchIcon className="icon"/></button>
                <FavoriteIcon className="icon"/>
                <ShoppingCartIcon className="icon"/>
                <AccountIcon className="icon"/>
            </div>
        </div>
        );
    }
}

export default Header;