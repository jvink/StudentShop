import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';
import Account from '../../components/Account';

class AccountContainer extends Component {

    componentWillMount() {
        this.props.usersActions.getAccount(this.props.token);
    }

    async editUser(token, user) {
        try {
            await this.props.usersActions.editUser(token, user);

            if (this.props.userStore.editUserResult) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.props.userStore);
        if (this.props.userStore.isGettingUser) {
            console.log('0')
            return <Account error={false} loading={true} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else if (this.props.userStore.getUserError) {
            console.log('1')
            return <Account error={true} loading={false} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else if (this.props.userStore.getUserResult) {
            console.log('2')
            return <Account error={false} loading={false} currentUser={this.props.userStore.getUserResult[0]} editUser={(user) => this.editUser(this.props.token, user)}/>;
        } else {
            console.log('3')
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