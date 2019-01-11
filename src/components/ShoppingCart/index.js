import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import PriceLabel from './price';
import ProductNameLabel from './name';
import CartOffIcon from 'mdi-react/CartOffIcon';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import '../../styles/product.css';

const styles = theme => ({
    primaryButton: {
        backgroundColor: '#e74c3c',
        color: '#fff'
    },
    secondaryButton: {
        backgroundColor: '#bdc3c7',
        color: '#fff'
    },
    chip: {
        marginBottom: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: '#fff',
        color: '#e74c3c',
        borderColor: '#e74c3c'
    },
    iconChip: {
        backgroundColor: '#e74c3c',
        color: '#fff',
        borderColor: '#e74c3c'
    },
    chevronIcon: {
        fontSize: '4em',
        color: '#e74c3c'
    }
  });

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class ShoppingCart extends Component {
    removeFromCart(productId) {
        this.props.removeFromCart(productId);
        toastr.light('Product uit uw winkelwagen verwijderd', toastrOptions);
    }

    removeAllFromCart() {
        this.props.removeAllFromCart();
        toastr.light('Alle producten zijn verwijderd uit uw winkelwagen', toastrOptions);
    }

    payProductsFromCart() {
        this.props.payProductsFromCart();
        toastr.light('Bestelling voltooid', toastrOptions);
    }

    render() {
        const { data, classes } = this.props;
        if (data.length === 0) {
            return (
                <div>
                    <h1>U heeft geen producten in uw winkelwagentje</h1>
                    <p>Best wel leeg hier...</p>
                </div>
            );
        } else {
            var total = 0;
            for(var i in data) { total += (data[i].p.price * data[i].u_p.amount); }
            return (
                <div>
                    <h1>Uw winkelwagentje</h1>
                    <div className="productsWrapper">
                        {data.map((product) => {
                        return (
                            <div className="productWrapper" key={product.p.id}>
                                <PriceLabel price={parseFloat(product.u_p.amount * product.p.price).toFixed(2)}/>
                                <p><b>{product.u_p.amount}</b> stuks</p>
                                <div className="productFavorite" onClick={() => {this.removeFromCart(product.p.id)}}>
                                    <CartOffIcon/>
                                </div>
                                <Link to={"product/" + product.p.id} className="productLink">
                                    <div className="productImageWrapper">{product.p.firstImg ? <img src={product.p.firstImg} alt={product.p.id} className="productImage"/> : <img src="https://raw.githubusercontent.com/jvink/project-c/master/src/images/no-image.jpg?token=AafImDyyZnKhuduvH2v0ac9GcDX5zhBhks5b8_FnwA%3D%3D" alt="NotFound" className="productImage"/>}</div>
                                    <ProductNameLabel name={product.p.name}/>
                                </Link>
                            </div>
                        );
                    })}
                    </div>
                    <h3 style={{marginTop: '1em'}}>Totaalbedrag: <i>€ {total.toFixed(2)}</i></h3>
                    <Button variant="contained" className={classes.primaryButton} onClick={() => {this.payProductsFromCart()}} style={{flex: 1, margin: '1em', float: 'right'}}>
                        Afrekenen
                        <ChevronRightIcon style={{marginLeft: '.1em'}}/>
                    </Button>
                    <Button variant="contained" className={classes.secondaryButton} onClick={() => {this.removeAllFromCart()}} style={{flex: 1, margin: '1em', float: 'right'}}>
                        Winkelwagen legen
                        <CartOffIcon style={{marginLeft: '.1em'}}/>
                    </Button>
                </div>
            );
        }
    }
}

export default withStyles(styles)(ShoppingCart);