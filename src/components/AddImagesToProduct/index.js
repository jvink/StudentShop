import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import AddRowIcon from '@material-ui/icons/PlaylistAdd';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { IconButton } from '@material-ui/core';
import '../../styles/register.css';

const styles = theme => ({
    addRowIconButton: {
        margin: 'auto'
    }
  });

class AddProduct extends Component {
    state = {
        productId: this.props.match.params.id ? this.props.match.params.id : null,
        images: [{url: ''}]
    };
    
    handleChange(name, value, index) {
        const newImages = this.state.images.slice();
        newImages[index].url = value;
        this.setState({images: newImages});
    };

    onClickAddImagesToProduct() {
        this.props.addImagesToProduct(this.state.images, this.state.productId);
    }

    onClickExtendList() {
        this.setState(prevState => ({
            images: [...prevState.images, {url: ''}]
        }));
    }

    render() {
        let {classes} = this.props;
        let {image, product} = this.props.currentProduct[0];
        return (
            <div style={{width: '100%'}}>
                <Card style={{width: '100%'}}>
                    <CardContent>
                        <h2>{product.name}</h2>
                        {(Array.isArray(image) && image.length > 0) ? image.map((imageRow, index) => {
                            return (
                                <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                                    <b><p>{index}.</p></b>
                                    <img style={{maxWidth: '72px', maxHeight: '72px', margin: '1em'}} src={imageRow.url} alt={imageRow.url}/>
                                    <span style={{marginRight: '12px'}}>{imageRow.url}</span>
                                </div>
                            );
                        }) : null}
                        <h1>Afbeeldingen toevoegen</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <ValidatorForm
                            ref="form"
                            onSubmit={() => this.onClickAddImagesToProduct()}
                        >
                            {
                                this.state.images.map((image, index) => {
                                    return (
                                        <UserTextField
                                            key={index}
                                            onAddImagesProduct={(name, value) => this.handleChange(name, value, index)}
                                            textFieldType="addImagesToProduct"
                                            id="outlined-addImages-input"
                                            error="errorAddImages"
                                            name={index.toString()}
                                        />
                                    );
                                })
                            }
                            <div style={{textAlign: 'center'}}>
                                <IconButton className={classes.addRowIconButton} onClick={() => this.onClickExtendList()}>
                                    <AddRowIcon />
                                </IconButton>
                            </div>
                            <button style={{float: 'right', marginBottom: '1em'}} type="submit" className="primaryButton">Bevestigen</button>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(AddProduct));