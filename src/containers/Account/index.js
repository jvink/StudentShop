import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import usersActionCreator from '../../store/actionCreators/user';
import Account from '../../components/Account';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const toastrOptionsError = {
    icon: 'error',
    status: 'error'
};

class AccountContainer extends Component {

    componentWillMount() {
        this.props.usersActions.getAccount(this.props.token);
    }

    async editUser(token, user) {
        try {
            await this.props.usersActions.editUser(token, user);

            if (this.props.userStore.editUserResult) {
                this.props.usersActions.getAccount(this.props.token);
                toastr.light('Account gegevens succesvol veranderd.', toastrOptions);
            } else {
                toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
            }
        } catch (error) {
            toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
        }
    }

    render() {
        if (this.props.userStore.isGettingUser) {
            return <Account error={false} loading={true} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else if (this.props.userStore.getUserError) {
            return <Account error={true} loading={false} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else if (this.props.userStore.getUserResult) {
            return <Account error={false} loading={false} currentUser={this.props.userStore.getUserResult[0]} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else {
            return <Account error={false} loading={true} editUser={(user) => this.editUser(this.props.token, user)}/>;
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