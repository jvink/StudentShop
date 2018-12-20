import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import userActionCreator from '../../store/actionCreators/user';
import Users from '../../components/Users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.userActions.getAllUsers();
      }

    render() {
        console.log(this.props.userStore);
        if (this.props.userStore.isGettingUsers) {
            return <p>Loading Data...</p>
        } else if (this.props.userStore.getUsersResult) {
            return (
                <Users users={this.props.userStore.getUsersResult}/>
            );
        } else if (this.props.userStore.getUsersError) {
            return <p>Data Error</p>;
        } else {
            return <p>Unknown Error</p>;
        }
    }
}

export default withRouter(connect(
    (state) => ({
        userStore: state.user,
    }),
    (dispatch) => ({
        userActions: userActionCreator(dispatch),
    })
  )(UsersContainer));