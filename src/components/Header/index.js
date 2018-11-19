import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/header.png';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FavouriteIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountIcon from '@material-ui/icons/Face';
import '../../styles/header.css';

export default class Header extends Component {
    render() {
        return (
        <div className="wrapperHeader">
            <div className="headerItemsWrapper">
                <Link to="/">
                    <img src={image} className="logo" alt="headerImg"/>
                </Link>
                <input placeholder="Waar ben je naar op zoek?"/>
                <button className="searchButton"><SearchIcon id="icon"/></button>
                <IconButton component={Link} to="/favourites"><FavouriteIcon/></IconButton>
                <IconButton><ShoppingCartIcon/></IconButton>
                <IconButton component={Link} to="/register"><AccountIcon/></IconButton>
            </div>
        </div>
        );
    }
}