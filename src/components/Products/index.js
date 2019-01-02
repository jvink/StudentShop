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
  avatar: {
    borderRadius: '0px',
    maxHeight: '50px',
    display: 'block',
    margin: 'auto'
  },
  button: {
    margin: theme.spacing.unit,
  },
  addButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#e74c3c',
    color: 'white'
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

class Products extends Component {
  render() {
    let { products, classes } = this.props;
    return (
      <div style={{width: '100%'}}>
        <div style={{marginBottom: '2em', marginTop: '1em'}}>
            <h1 style={{display: 'inline'}}>Producten</h1>
            <Tooltip title="Product toevoegen">
              <IconButton component={Link} to="/addProduct" style={{display: 'inline', float: 'right'}} className={classes.addButton} aria-label="Delete">
                <AddIcon />
              </IconButton>
            </Tooltip>
        </div>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Naam</TableCell>
                <TableCell>Prijs</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(product => {
                return (
                  <TableRow key={product.id}>
                    <TableCell><img alt={product.name} src={product.firstImg} className={classes.avatar}/></TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>€ {product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Tooltip title="Product verwijderen">
                        <IconButton className={classes.button} onClick={() => this.props.deleteProduct(product.id)} aria-label="Delete">
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

export default withStyles(styles)(Products);