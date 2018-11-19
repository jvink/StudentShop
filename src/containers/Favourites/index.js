import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Product from '../../components/Product';

class FavouritesContainer extends Component {
    componentWillMount() {
        this.props.favouritesActions.getAllFavourites(1);
    }

    checkIsFavourite(userId, productId) {
        this.props.favouritesActions.checkFavourite(userId, productId);
    }

    render() {
        if (this.props.favouritesStore.isGettingFavourites) {
            return <p>Loading..</p>
        } else if (this.props.favouritesStore.getFavouritesResult) {
            return (
                <div>
                    <Product checkIsFavourite={(userId, productId) => this.checkIsFavourite(userId, productId)} data={this.props.favouritesStore.getFavouritesResult}/>
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