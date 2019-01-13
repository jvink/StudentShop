import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    avatar: {
      borderRadius: '0px',
      maxHeight: '50px',
      display: 'block',
      margin: 'auto'
    },
  });

class OrderHistory extends Component {

    render() {
        const { data, classes } = this.props;
        if (data.length === 0) {
            return (
                <div>
                    <h1>U heeft geen bestel geschiedenis</h1>
                    <p>Best wel leeg hier...</p>
                </div>
            );
        } else {
            return (
                <div style={{width: '100%'}}>
                    <h1>Uw bestel geschiedenis</h1>
                    <Paper className={classes.root}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Naam</TableCell>
                                    <TableCell>Totaalbedrag</TableCell>
                                    <TableCell>Hoeveelheid</TableCell>
                                    <TableCell>Besteldatum</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(product => {
                                    return (
                                        <TableRow key={product.productName}>
                                            <TableCell><img alt={product.image} src={product.image} className={classes.avatar}/></TableCell>
                                            <TableCell>{product.productName}</TableCell>
                                            <TableCell>€ {product.totalPrice.toFixed(2)}</TableCell>
                                            <TableCell>{product.amount}</TableCell>
                                            <TableCell>{product.purchaseDate}</TableCell>
                                            <TableCell><span style={{color: product.status === "Pending" ? "orange" : "green"}}>{product.status}</span></TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            );
        }
    }
}

export default withStyles(styles)(OrderHistory);