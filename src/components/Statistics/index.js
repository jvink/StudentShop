import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

class Statistics extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Card>
                    <CardContent>
                        Hi
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Statistics;