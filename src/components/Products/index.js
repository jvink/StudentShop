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
import Badge from '@material-ui/core/Badge';
import ImagesIcon from '@material-ui/icons/Filter';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
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
    console.log(products);
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
                <TableCell>Aantal afbeeldingen</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(product => {
                return (
                  <TableRow key={product.product.id}>
                    <TableCell><img alt={product.product.name} src={product.product.firstImg} className={classes.avatar}/></TableCell>
                    <TableCell>{product.product.name}</TableCell>
                    <TableCell>€ {product.product.price}</TableCell>
                    <TableCell>{product.product.stock}</TableCell>
                    <TableCell>
                      <IconButton component={Link} to={"/manageImages/" + product.product.id} aria-label="4 pending messages" className={classes.margin}>
                        <Badge badgeContent={product.numberOfImages} color="primary">
                          <ImagesIcon />
                        </Badge>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Product verwijderen">
                        <IconButton className={classes.button} onClick={() => this.props.deleteProduct(product.product.id)} aria-label="Delete">
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