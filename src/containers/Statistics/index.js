import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import statisticsActionCreator from '../../store/actionCreators/statistics';
import Statistics from '../../components/Statistics';

class StatisticsContainer extends Component {
    componentDidMount() {
        this.props.statisticsActions.getUsersCount(this.props.token);
        this.props.statisticsActions.getLowestStockProducts(this.props.token);
        this.props.statisticsActions.getPendingOrderCount(this.props.token);
        this.props.statisticsActions.getDeliveredOrderCount(this.props.token);
    }

    render() {
        let {
            isGettingUsersCount,
            isGettingLowestStockProducts,
            isGettingPendingOrdersCount,
            isGettingDeliveredOrdersCount,
            getUsersCountError,
            getLowestStockProductsError,
            getPendingOrdersCountError,
            getDeliveredOrdersCountError,
            getUsersCountResult,
            getLowestStockProductsResult,
            getPendingOrdersCountResult,
            getDeliveredOrdersCountResult
        } = this.props.statisticsStore;
        if (isGettingUsersCount || isGettingLowestStockProducts || isGettingPendingOrdersCount || isGettingDeliveredOrdersCount) {
            return <p>Loading</p>;
        } else if (getUsersCountError || getLowestStockProductsError || getPendingOrdersCountError || getDeliveredOrdersCountError) {
            return <p>Error1</p>;
        } else if (getUsersCountResult !== undefined && getLowestStockProductsResult !== undefined && getPendingOrdersCountResult !== undefined && getDeliveredOrdersCountResult !== undefined) {
            return <Statistics getUsersCountResult={getUsersCountResult} getLowestStockProductsResult={getLowestStockProductsResult} getPendingOrdersCountResult={getPendingOrdersCountResult} getDeliveredOrdersCountResult={getDeliveredOrdersCountResult}/>;
        } else {
            return <p>Error2</p>;
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