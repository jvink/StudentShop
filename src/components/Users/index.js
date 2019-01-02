import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  addButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#e74c3c',
    color: 'white'
  },
});

class Users extends Component {
  render() {
    let { users, classes } = this.props;
    return (
      <div style={{width: '100%'}}>
        <div style={{marginBottom: '2em', marginTop: '1em'}}>
            <h1 style={{display: 'inline'}}>Gebruikers</h1>
            <Tooltip title="Product toevoegen">
              <IconButton component={Link} to="/register" style={{display: 'inline', float: 'right'}} className={classes.addButton} aria-label="Delete">
                <AddIcon />
              </IconButton>
            </Tooltip>
        </div>
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
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.postalcode}</TableCell>
                    <TableCell>{user.house_Number + user.addition}</TableCell>
                    <TableCell>{user.telephone_Number}</TableCell>
                    <TableCell>
                      <Tooltip title="Gebruiker verwijderen">
                        <IconButton className={classes.button} onClick={() => this.props.deleteUser(user.id)} aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
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