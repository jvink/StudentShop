import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import categoryActionCreator from '../../store/actionCreators/category';
import CategoryHeader from '../../components/CategoryHeader';

class CategoryContainer extends Component {

    componentWillMount() {
        this.props.categoryActions.getCategory();
    }

    render() {
        if (this.props.categoryStore.getCategoryResult) {
            return <CategoryHeader data={this.props.categoryStore.getCategoryResult}/>
        } else if (this.props.categoryStore.isGettingCategory) {
            return <p>Loading..</p>
        } else if (this.props.categoryStore.categoryError) {
            return <p>Could not receive categories</p>
        } else {
            return <p>400</p>
        }
    }
}

export default withRouter(connect(
    (state) => ({
        categoryStore: state.category
    }),
    (dispatch) => ({
        categoryActions: categoryActionCreator(dispatch)
    })
  )(CategoryContainer));