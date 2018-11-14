import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favoritesActionCreator from '../../store/actionCreators/favorites';

class FavoritesContainer extends Component {

    render() {
        console.log(this.props.favoritesStore);
        return (
            <button onClick={() => this.props.favoritesActions.addToFavorites(4, 6)}>Hi mensen</button>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        favoritesStore: state.favorites
    }),
    (dispatch) => ({
        favoritesActions: favoritesActionCreator(dispatch)
    })
  )(FavoritesContainer));