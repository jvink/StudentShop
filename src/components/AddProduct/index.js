import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import { ValidatorForm } from 'react-material-ui-form-validator';
import '../../styles/register.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class AddProduct extends Component {
    state = {
        name: null,
        description: null,
        price: null,
        firstImg: null,
        stock: null,
        imgUrls: [],
        category: null,
        subcategory: null
    };
    
    handleChange(name, value) {
        this.setState({
            [name]: value,
        });
    };

    onClickAddProduct() {
        let {name, description, price, firstImg, stock, imgUrls, category, subcategory} = this.state;

        let user = {
            name: (name === '' ? null : name),
            description: (description === '' ? null : description),
            price: (price === '' ? null : price),
            firstImg: (firstImg === '' ? null : firstImg),
            stock: (stock === '' ? null : stock),
            imgUrls: (imgUrls.length === 0 ? null : imgUrls),
            category: (category === '' ? null : category),
            subcategory: (subcategory === -1 ? null : subcategory),
        }
        this.props.editUser(user);
        toastr.light('Product toegevoegd.', toastrOptions);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Product toevoegen</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <ValidatorForm
                            ref="form"
                            onSubmit={() => this.onClickAddProduct()}
                        >
                            <UserTextField
                                onAddProduct={(name, value) => this.handleChange(name, value)}
                                textFieldType="addProduct"
                                id="outlined-name-input"
                                error="errorName"
                                label="Productnaam"
                                type="name"
                                name="name"
                            />
                            <UserTextField
                                onAddProduct={(name, value) => this.handleChange(name, value)}
                                textFieldType="addProduct"
                                id="outlined-description-input"
                                error="errorDescription"
                                label="Beschrijving"
                                type="name"
                                name="name"
                            />
                            <UserTextField
                                onAddProduct={(name, value) => this.handleChange(name, value)}
                                textFieldType="addProduct"
                                id="outlined-price-input"
                                error="errorPrice"
                                label="Prijs"
                                type="price"
                                name="price"
                            />
                            <UserTextField
                                onAddProduct={(name, value) => this.handleChange(name, value)}
                                textFieldType="addProduct"
                                id="outlined-firstimg-input"
                                error="errorFirstimg"
                                label="Afbeelding"
                                type="firstimg"
                                name="firstimg"
                            />
                            <button type="submit" className="primaryButton">Bevestigen</button>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default AddProduct;