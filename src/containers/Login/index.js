import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';
import Login from '../../components/Login';

class LoginContainer extends Component {
    async login(email, password) {
        try {
            await this.props.usersActions.login(email, password);
            
            if (this.props.userStore.loginUserResult) {
                localStorage.setItem("USER", this.props.userStore.loginUserResult);
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.props.userStore.isLoggingIn) {
            return <Login error={false} loading={true} login={(email, password) => this.login(email, password)}/>;
        } else if (this.props.userStore.loginError) {
            return <Login error={true} loading={false} login={(email, password) => this.login(email, password)}/>;
        } else if (this.props.userStore.loginUserResult) {
            return <Login error={false} loading={false} login={(email, password) => this.login(email, password)}/>;
        } else {
            return <Login error={false} loading={false} login={(email, password) => this.login(email, password)}/>;
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
  )(LoginContainer));