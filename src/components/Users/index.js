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
});

class Users extends Component {
  render() {
    let { users, classes } = this.props;
    return (
      <div style={{width: '100%'}}>
        <h1>Gebruikers</h1>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Voornaam</TableCell>
                <TableCell>Achternaam</TableCell>
                <TableCell>Postcode</TableCell>
                <TableCell>Huisnummer</TableCell>
                <TableCell>Telefoonnummer</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.lastname}</TableCell>
                    <TableCell>{user.postalcode}</TableCell>
                    <TableCell>{user.house_Number + user.addition}</TableCell>
                    <TableCell>{user.telephone_Number}</TableCell>
                    <TableCell>X</TableCell>
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

export default withStyles(styles)(Users);