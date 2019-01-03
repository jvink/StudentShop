import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import '../../styles/register.css';

class AddProduct extends Component {
    state = {
        name: null,
        description: null,
        price: null,
        firstImg: null,
        stock: null,
        category: '',
        subcategory: null,
        labelWidth: 0
    };
    
    handleChange(name, value) {
        this.setState({
            [name]: value,
        });
    };

    handleChange2 = name => event => {
        console.log(name, event.target.value)
        this.setState({
            [name]: event.target.value
        });
    }

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
                                label="Afbeeldings url"
                                type="firstimg"
                                name="firstimg"
                            />
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-category-simple"
                            >
                                Categorie
                            </InputLabel>
                            <Select
                                fullWidth
                                value={this.state.category}
                                onChange={this.handleChange2("category")}
                                input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="category"
                                    id="outlined-category-simple"
                                />
                                }
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {this.props.categories.map((category) => {
                                    console.log(category);
                                    return <MenuItem key={category.category.id} value={category.category.name}>{category.category.name}</MenuItem>
                                })}
                            </Select>
                            {(this.state.category === null || this.state.category === '') ? <p>Selecteer een category om een subcategory te kunnen selecteren.</p> :
                            <div>
                                <InputLabel
                                    ref={ref => {
                                    this.InputLabelRef = ref;
                                    }}
                                    htmlFor="outlined-subcategory-simple"
                                >
                                    Subcategorie
                                </InputLabel>
                                <Select
                                    fullWidth
                                    value={this.state.subcategory}
                                    onChange={this.handleChange2("subcategory")}
                                    input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                        name="subcategory"
                                        id="outlined-subcategory-simple"
                                    />
                                    }
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    {this.props.categories.map((category) => {
                                        return <MenuItem key={category.category.id} value={category.category.name}>{category.category.name}</MenuItem>
                                    })}
                                </Select>
                            </div>
                            }
                            <button type="submit" className="primaryButton">Bevestigen</button>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default AddProduct;