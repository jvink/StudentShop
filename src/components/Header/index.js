import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import image from '../../images/header.png';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FavouriteIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountIcon from '@material-ui/icons/Face';
import '../../styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
    }
    
    handleSubmit(event) {
        this.setState({searchQuery: ""});
        this.props.history.push('/results/' + this.state.searchQuery);
        event.preventDefault();
    }

    render() {
        return (
        <div className="wrapperHeader">
            <form className="headerItemsWrapper" onSubmit={this.handleSubmit}>
                <Link to="/">
                    <img src={image} className="logo" alt="headerImg"/>
                </Link>
                <input placeholder="Waar ben je naar op zoek?" value={this.state.searchQuery} onChange={this.handleChange}/>
                <button className="searchButton"><SearchIcon id="icon"/></button>
                <IconButton component={Link} to="/favourites"><FavouriteIcon/></IconButton>
                <IconButton><ShoppingCartIcon/></IconButton>
                <IconButton component={Link} to="/register"><AccountIcon/></IconButton>
            </form>
        </div>
        );
    }
}

export default withRouter(Header);