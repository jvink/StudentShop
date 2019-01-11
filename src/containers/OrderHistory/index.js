import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import historyActionCreator from '../../store/actionCreators/history';
import OrderHistory from '../../components/OrderHistory';

class HistoryContainer extends Component {

    componentDidMount() {
        if (this.props.token) {
            this.props.historyActions.getHistory(this.props.token);
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        if (this.props.historyStore.isGettingHistory) {
            return <p>Loading..</p>
        } else if (this.props.historyStore.getHistoryResult) {
            return (
                <div style={{width: '100%'}}>
                    <OrderHistory data={this.props.historyStore.getHistoryResult}/>
                </div>
            );
        } else if (this.props.historyStore.productsError) {
            return <p>Could not receive history</p>
        } else {
            return <p>400</p>
        }
    }
}

export default withRouter(connect(
    (state) => ({
        historyStore: state.history
    }),
    (dispatch) => ({
        historyActions: historyActionCreator(dispatch)
    })
  )(HistoryContainer));