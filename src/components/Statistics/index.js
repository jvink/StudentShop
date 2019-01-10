import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountGroupIcon from 'mdi-react/AccountGroupIcon';
import ProgressClockIcon from 'mdi-react/ProgressClockIcon';
import TruckIcon from 'mdi-react/TruckIcon';

const styles = theme => ({
    root: {
      width: '100%',
      margin: theme.spacing.unit,
      overflowX: 'auto',
      padding: '1em'
    },
    avatar: {
      borderRadius: '0px',
      maxHeight: '30px',
      display: 'block',
      margin: 'auto'
    },
  });

class Statistics extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Paper className={classes.root}>
                        Het aantal huidige gebruikers staat op dit moment op
                        <h1 style={{textAlign: 'center'}}><AccountGroupIcon style={{marginRight: '10px'}}/><b>{this.props.getUsersCountResult}</b></h1>
                    </Paper>
                    <Paper className={classes.root}>
                        Het aantal bestellingen staat op dit moment op
                        <h1 style={{textAlign: 'center'}}><ProgressClockIcon style={{marginRight: '10px'}}/><b>{this.props.getPendingOrdersCountResult}</b></h1>
                    </Paper>
                    <Paper className={classes.root}>
                        Het aantal verscheepte bestellingen staat op dit moment op
                        <h1 style={{textAlign: 'center'}}><TruckIcon style={{marginRight: '10px'}}/><b>{this.props.getDeliveredOrdersCountResult}</b></h1>
                    </Paper>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Paper className={classes.root}>
                        Producten met de laagste voorraad
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Naam</TableCell>
                                <TableCell>Prijs</TableCell>
                                <TableCell>Voorraad</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.props.getLowestStockProductsResult.map(product => {
                                return (
                                <TableRow key={product.id}>
                                    <TableCell style={{maxWidth: '30px', paddingLeft: '0px', paddingRight: '0px'}}><img alt={product.name} src={product.firstImg} className={classes.avatar}/></TableCell>
                                    <TableCell style={{paddingLeft: '0px', paddingRight: '0px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{product.name}</TableCell>
                                    <TableCell style={{paddingRight: '0px', paddingLeft: '0px'}}>€ {product.price}</TableCell>
                                    <TableCell style={{paddingRight: '0px', paddingLeft: '0px'}}><h4><b>{product.stock}</b></h4></TableCell>
                                </TableRow>
                                );
                            })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Statistics);