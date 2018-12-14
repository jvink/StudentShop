import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import image from '../../images/header.png';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavouriteIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountIcon from '@material-ui/icons/Face';
import '../../styles/header.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            anchorEl: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
    }
    
    handleSubmit(event) {
        if (this.state.searchQuery !== "") {
            this.props.history.push('/results/' + this.state.searchQuery);
            this.setState({searchQuery: ""});
            event.preventDefault();
        } else {
            toastr.light('Vul een zoekterm in aub', toastrOptions);
            event.preventDefault();
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        localStorage.removeItem("USER");
        this.setState({ anchorEl: null });
        window.location.reload(true);
        toastr.light('U bent uitgelogd', toastrOptions);
    };

    render() {
        const { anchorEl } = this.state;
        let user = localStorage.getItem("USER");

        return (
        <div className="wrapperHeader">
            <form className="headerItemsWrapper" onSubmit={this.handleSubmit}>
                <Link to="/">
                    <img src={image} className="logo" alt="headerImg"/>
                </Link>
                <input placeholder="Waar ben je naar op zoek?" value={this.state.searchQuery} onChange={this.handleChange}/>
                <button className="searchButton"><SearchIcon id="icon"/></button>
                <IconButton component={Link} to="/favourites"><FavouriteIcon/></IconButton>
                <IconButton component={Link} to="/cart"><ShoppingCartIcon/></IconButton>
                <div>
                    <IconButton 
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                            <AccountIcon/>
                    </IconButton>
                    <Menu
                        disableAutoFocusItem={true}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}>
                        {user ?
                        <div className="menuWrapper">
                            <MenuItem style={{overflow: 'hidden'}} onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem style={{overflow: 'hidden'}} onClick={this.handleLogout}>Logout</MenuItem>
                        </div>:
                        <div className="menuWrapper">
                            <MenuItem component={Link} to="/login" style={{overflow: 'hidden'}} onClick={this.handleClose}>Login</MenuItem>
                            <MenuItem component={Link} to="/register" style={{overflow: 'hidden'}} onClick={this.handleClose}>Registreren</MenuItem>
                        </div>}
                    </Menu>
                </div>
            </form>
        </div>
        );
    }
}

export default withRouter(Header);