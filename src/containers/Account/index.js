import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';
import Account from '../../components/Account';

class AccountContainer extends Component {

    async editUser(user) {
        try {
            await this.props.usersActions.editUser(user);

            if (this.props.userStore.editUserResult) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.props.userStore.isEdittingUser) {
            return <Account error={false} loading={true} register={(user) => this.editUser(user)}/>;
        } else if (this.props.userStore.editUserError) {
            return <Account error={true} loading={false} register={(user) => this.editUser(user)}/>;
        } else if (this.props.userStore.editUserResult) {
            return <Account error={false} loading={false} register={(user) => this.editUser(user)}/>;
        } else {
            return <Account error={false} loading={false} register={(user) => this.editUser(user)}/>;
        }
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