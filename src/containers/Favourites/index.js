import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Favourites from '../../components/Favourites';
import '../../styles/product.css';

class FavouritesContainer extends Component {

    componentDidMount() {
        if (this.props.token) {
            this.props.favouritesActions.getAllFavourites(this.props.token);
        } else {
            this.props.history.push('/login');
        }
    }

    flipFavourites(productId) {
        this.props.favouritesActions.flipFavourites(this.props.token, productId);
    }

    render() {
        if (this.props.favouritesStore.isGettingFavourites) {
            return <p>Loading..</p>
        } else if (this.props.favouritesStore.getFavouritesResult) {
            return (
                <div className="productsWrapper">
                    <Favourites flipFavourites={(productId) => this.flipFavourites(productId)} data={this.props.favouritesStore.getFavouritesResult}/>
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