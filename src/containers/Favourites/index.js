import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import favouritesActionCreator from '../../store/actionCreators/favourites';
import ProductItem from '../../components/ProductItem';
import '../../styles/product.css';

class FavouritesContainer extends Component {

    componentWillMount() {
        this.props.favouritesActions.getAllFavourites(1)
    }

    render() {
        if (this.props.favouritesStore.getFavouritesResult) {
            return (
                <div className="productContainerHorizontal">
                    {this.props.favouritesStore.getFavouritesResult.products.map((p) => {
                        return (
                            <div key={p.id} className="column">
                                <ProductItem display="horizontal" productItemData={p}/>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (this.props.favouritesStore.isGettingFavourites) {
            return <p>Loading..</p>
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