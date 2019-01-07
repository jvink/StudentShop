import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import statisticsActionCreator from '../../store/actionCreators/statistics';
import Statistics from '../../components/Statistics';

class StatisticsContainer extends Component {
    componentDidMount() {
        this.props.statisticsActions.getUsersCount();
    }

    render() {
        console.log(this.props);
        if (this.props.statisticsStore.isGettingUsersCount) {
            return <p>Loading</p>;
        } else if (this.props.statisticsStore.getUsersCountError) {
            return <p>Error</p>;
        } else if (this.props.statisticsStore.getUsersCountResult) {
            return <Statistics/>;
        } else {
            return <p>Error</p>;
        }
    }
}

export default withRouter(connect(
    (state) => ({
        statisticsStore: state.statistics
    }),
    (dispatch) => ({
        statisticsActions: statisticsActionCreator(dispatch)
    })
  )(StatisticsContainer));