import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import Favourites from '../../components/Favourites';
import '../../styles/product.css';

class FavouritesContainer extends Component {
    constructor(props) {
        super(props);

        let token = localStorage.getItem("USER");
        this.state = {
            token
        }
    }
    
    componentDidMount() {
        this.props.favouritesActions.getAllFavourites(this.state.token);
    }

    removeFromFavourites(productId) {
        this.props.favouritesActions.flipFavourites(this.state.token, productId);
    }

    render() {
        if (this.props.favouritesStore.isGettingFavourites) {
            return <p>Loading..</p>
        } else if (this.props.favouritesStore.getFavouritesResult) {
            return (
                <div className="productsWrapper">
                    <Favourites removeFromFavourites={(productId) => this.removeFromFavourites(productId)} data={this.props.favouritesStore.getFavouritesResult}/>
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