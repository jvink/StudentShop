import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import notFoundImage from '../../images/no-image.jpg';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import HeartOffIcon from 'mdi-react/HeartOffIcon';
import { toastr } from 'react-redux-toastr';
import '../../styles/detailproduct.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

const styles = theme => ({
    primaryButton: {
        backgroundColor: '#f39c12',
        color: '#fff'
    },
    secondaryButton: {
        backgroundColor: '#e74c3c',
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

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 0,
          expanded: false,
          imageIndex: 0,
          isFavourite: this.props.product[0].isFavourite
        };

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
    }

    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded });
    };

    handleImageControl(forward) {
        const {image} = this.props.product && this.props.product.length !== 0 ? this.props.product[0] : null;
        let begin = 0;
        let end = image.length;
        if (forward) {
            if (this.state.imageIndex === (end - 1)) {
                this.setState({imageIndex: begin});
            } else {
                this.setState({imageIndex: this.state.imageIndex + 1});
            }
        } else {
            if (this.state.imageIndex === begin) {
                this.setState({imageIndex: (end - 1)});
            } else {
                this.setState({imageIndex: this.state.imageIndex - 1});
            }
        }
    }

    getImagePreviewUrl(next) {
        const {image} = this.props.product && this.props.product.length !== 0 ? this.props.product[0] : null;
        let begin = 0;
        let end = image.length;
        if (image.length > 0) {
            if (next) {
                if (this.state.imageIndex === (end - 1)) {
                    return image[begin].url;
                } else {
                    return image[this.state.imageIndex + 1].url;
                }
            } else {
                if (this.state.imageIndex === begin) {
                    return image[end - 1].url;
                } else {
                    return image[this.state.imageIndex - 1].url;
                }
            }
        }
    }

    onFlipFavourites(product, isFavourite) {
        this.props.flipFavourites(product.id);
        this.setState({isFavourite: !isFavourite});
        isFavourite ? toastr.light('Uit favorieten verwijderd', toastrOptions) : toastr.light('Aan favorieten toegevoegd', toastrOptions);
    }

    addProductToCart(productId) {
        this.props.addToCart(productId);
    }

    render() {
        const {classes} = this.props;
        const {product, image} = this.props.product && this.props.product.length !== 0 ? this.props.product[0] : null;
        return (
            <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <Card style={{flex: 2, flexDirection: 'column', margin: '.5em', alignSelf: 'flex-start', display: 'flex', minHeight: '480px'}}>  
                    <div style={{flex: 1, minHeight: '500px', whiteSpace: 'nowrap', textAlign: 'center', margin: '1em 0'}}>
                        <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}></span>{image.length !== 0 ? <img alt={image[this.state.imageIndex].id} src={image[this.state.imageIndex].url} style={{maxHeight: '480px', padding: '.5em', verticalAlign: 'middle'}}/> : (product.firstImg ? <img src={product.firstImg} alt={product.id} style={{maxHeight: '480px', padding: '.5em'}}/> : <img src={notFoundImage} alt="NotFound" className="productImage"/>)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', margin: 'auto'}}>
                        <div>
                            {product.firstImg ?
                            <IconButton onClick={() => this.handleImageControl(false)} style={{marginLeft: 'auto'}}>
                                <ChevronLeftIcon className={classes.chevronIcon}/>
                            </IconButton>
                            : null}
                        </div>
                        <div style={{display: 'flex'}}>
                            {image.length > 1 ?
                                <div style={{lineHeight: '100px'}}>
                                    <img alt="preview" src={this.getImagePreviewUrl(false)} style={{maxWidth: '72px', maxHeight: '72px', display: 'inlineBlock', verticalAlign: 'middle', lineHeight: 'normal'}}/>
                                </div>
                            : null}
                            <div style={{lineHeight: '100px'}}>
                                <img alt="preview" src={image.length > 0 ? image[this.state.imageIndex].url : (product.firstImg ? product.firstImg : notFoundImage)} style={{maxWidth: '96px', maxHeight: '96px', display: 'inlineBlock', verticalAlign: 'middle', lineHeight: 'normal'}}/>
                            </div>
                            {image.length > 1 ?
                                <div style={{lineHeight: '100px'}}>
                                    <img alt="preview" src={this.getImagePreviewUrl(true)} style={{maxWidth: '72px', maxHeight: '72px', display: 'inlineBlock', verticalAlign: 'middle', lineHeight: 'normal'}}/>
                                </div>
                            : null}
                        </div>
                        <div>
                            {product.firstImg ?
                            <IconButton onClick={() => this.handleImageControl(true)}>
                                <ChevronRightIcon className={classes.chevronIcon}/>
                            </IconButton>
                            : null}
                        </div>
                    </div>
                </Card>
                <Card style={{flex: 1, margin: '.5em', alignSelf: 'flex-start'}}>
                    <div style={{backgroundColor: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '1em'}}>
                        <span style={{fontSize: '1.5em', fontWeight: 'bold', marginBottom: '.5em'}}>
                            {product.name}
                        </span>
                        <h5>Gratis bezorging bij bestellingen boven de 50 euro!</h5>
                        <div style={{marginBottom: '.5em'}}>
                            <Chip variant="outlined" avatar={<Avatar className={classes.iconChip}><LocalShippingIcon/></Avatar>} label="vóór 24:00 uur besteld, morgen in huis" color="primary" className={classes.chip}/>
                            <br/><Chip variant="outlined" avatar={<Avatar className={classes.iconChip}><DoneIcon/></Avatar>} label="30 dagen bedenktijd" color="primary" className={classes.chip}/>
                            <br/><Chip variant="outlined" avatar={<Avatar className={classes.iconChip}><AttachMoneyIcon/></Avatar>} label="betaal zoals je wilt: vooraf, achteraf of gespreid" color="primary" className={classes.chip}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Button variant="contained" className={classes.primaryButton} onClick={() => this.addProductToCart(product.id)} style={{flex: 1, marginRight: '.3em'}}>
                                In wagentje
                                <AddShoppingCartOutlined style={{marginLeft: '.1em'}}/>
                            </Button>
                            {this.state.isFavourite ?
                                <Button variant="contained" className={classes.secondaryButton} onClick={() => this.onFlipFavourites(product, this.state.isFavourite)} style={{flex: 1}}>
                                    Uit favorieten
                                    <HeartOffIcon style={{marginLeft: '.1em'}}/>
                                </Button>
                                :
                                <Button variant="contained" className={classes.secondaryButton} onClick={() => this.onFlipFavourites(product, this.state.isFavourite)} style={{flex: 1}}>
                                    In favorieten
                                    <FavoriteIcon style={{marginLeft: '.1em'}}/>
                                </Button>
                            }
                        </div>
                    </div>
                    <h3 style={{marginLeft: '1em'}}>
                        Productprijs
                    </h3>
                    <h3 style={{color: '#e74c3c', marginLeft: '1em'}}>
                        € {product.price}
                    </h3>
                    <hr/>
                    <CardActions disableActionSpacing>
                        <Button
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            Beschrijving
                            {this.state.expanded ? <ExpandLessIcon/> : <ExpandMoreIcon />}
                        </Button>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(DetailProduct);