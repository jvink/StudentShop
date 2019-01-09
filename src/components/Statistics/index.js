import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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