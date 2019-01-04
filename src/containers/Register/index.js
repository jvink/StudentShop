import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';
import usersActionCreator from '../../store/actionCreators/user';
import Register from '../../components/Register';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const toastrOptionsError = {
    icon: 'error',
    status: 'error'
};

class RegisterContainer extends Component {
    async register(user) {
        try {
            await this.props.usersActions.register(user);
            
            if (this.props.userStore.registerUserResult) {
                this.props.history.push('/login');
                toastr.light('Succesvol geregistreerd! Log nu in om te beginnen.', toastrOptions);
            }
        } catch (error) {
            toastr.light('Er is iets misgegaan. Probeer het later opnieuw.', toastrOptionsError);
        }
    }

    render() {
        if (this.props.userStore.isRegistering) {
            return <Register error={false} loading={true} register={(user) => this.register(user)}/>;
        } else if (this.props.userStore.registerError) {
            return <Register errors={this.props.userStore.registerError} error={true} loading={false} register={(user) => this.register(user)}/>;
        } else if (this.props.userStore.registerUserResult) {
            return <Register error={false} loading={false} register={(user) => this.register(user)}/>;
        } else {
            return <Register error={false} loading={false} register={(user) => this.register(user)}/>;
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
  )(RegisterContainer));