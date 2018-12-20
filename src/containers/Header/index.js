import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';
import Header from '../../components/Header';

class HeaderContainer extends Component {

    componentWillMount() {
        this.props.usersActions.isAdmin(this.props.token);
    }

    render() {
        return (
            <Header isAdmin={this.props.userStore.checkAdminResult}/>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        userStore: state.user
    }),
    (dispatch) => ({
        usersActions: usersActionCreator(dispatch)
    })
  )(HeaderContainer));