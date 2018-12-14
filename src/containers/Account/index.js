import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';

class AccountContainer extends Component {

    async editUser(user) {
        try {
            await this.props.usersActions.editUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <p>Account</p>
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
  )(AccountContainer));