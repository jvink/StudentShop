import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActionCreator from '../store/actionCreators/user';

class Root extends Component {
    constructor(props) {
        super(props);

        this.addUserdata = this.addUserdata.bind(this);
        this.getUserdata = this.getUserdata.bind(this);
    }

    render() {
      return (
        <div>
            <p>Hi!</p>
            <button type="submit" onClick={() => { this.addUserdata('test') }}>addem</button>
            <button type="submit" onClick={() => { this.getUserdata() }}>getem</button>
        </div>
      );
    }

    addUserdata(test) {
        this.props.userActions.getUser(test);
    }

    getUserdata() {
        console.log(this.props.userStore.registerUserResult);
    }
}

export default connect(
    state => ({
        userStore: state.user
    }),
    dispatch => ({
        userActions: userActionCreator(dispatch)
    })
)(Root);