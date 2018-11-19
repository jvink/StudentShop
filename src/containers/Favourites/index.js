import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Product from '../../components/Product';
import '../../styles/product.css';

class FavouritesContainer extends Component {
    componentWillMount() {
        this.props.favouritesActions.getAllFavourites(1);
    }

    render() {
        if (this.props.favouritesStore.isGettingFavourites) {
            return <p>Loading..</p>
        } else if (this.props.favouritesStore.getFavouritesResult) {
            return (
                <div className="productsWrapper">
                    <Product data={this.props.favouritesStore.getFavouritesResult}/>
                </div>
            );
        } else if (this.props.favouritesStore.productsError) {
            return <p>Could not receive favourites</p>
        } else {
            return <p>400</p>
        }
    }
}

export default withRouter(connect(
    (state) => ({
        favouritesStore: state.favourites
    }),
    (dispatch) => ({
        favouritesActions: favouritesActionCreator(dispatch)
    })
  )(FavouritesContainer));