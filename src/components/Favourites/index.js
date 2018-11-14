import React, { Component } from 'react';
import Product from '../../containers/Product';
import '../../styles/favourites.css';

class Favourites extends Component {

    render() {
        return (
            <div style={{width: '100%'}}>
                <Product display="horizontal"/>
            </div>
        );
    }
}

export default Favourites;