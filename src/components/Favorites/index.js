import React, { Component } from 'react';
import Product from '../../containers/Product';
import '../../styles/favorites.css';

class Favorites extends Component {

    render() {
        return (
            <div style={{width: '100%'}}>
                <Product display="horizontal"/>
            </div>
        );
    }
}

export default Favorites;