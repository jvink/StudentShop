import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import { ValidatorForm } from 'react-material-ui-form-validator';
import '../../styles/register.css';

class Account extends Component {
    state = {
        email: null,
        password: null,
        street: null,
        city: null,
        postalCode: null,
        houseNumber: null,
        houseNumberSuffix: null,
        phoneNumber: null
    };
    
    handleChange(name, value) {
        this.setState({
            [name]: value,
        });
    };

    onClickEditUser() {
        let {email, password, street, city, postalCode, houseNumber, houseNumberSuffix, phoneNumber} = this.state;

        let user = {
            email: (email === '' ? null : email),
            password: (password === '' ? null : password),
            street: (street === '' ? null : street),
            city: (city === '' ? null : city),
            postalCode: (postalCode === '' ? null : postalCode),
            houseNumber: (houseNumber === -1 ? null : houseNumber),
            houseNumberSuffix: (houseNumberSuffix === '' ? null : houseNumberSuffix),
            phoneNumber: (phoneNumber === -1 ? null : phoneNumber),
        }
        this.props.editUser(user);
    }

    shouldComponentUpdate() {
        if(this.props.currentUser) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Accountgegevens wijzigen</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <ValidatorForm
                            ref="form"
                            onSubmit={() => this.onClickEditUser()}
                        >
                            <UserTextField
                                placeholder={this.props.currentUser ? this.props.currentUser.email : null}
                                onEditUser={(name, value) => this.handleChange(name, value)}
                                textFieldType="editUser"
                                id="outlined-email-input"
                                validators={['isEmail']}
                                errorMessages={['Ongeldig emailadres']}
                                error="errorEmail"
                                label="Email"
                                type="email"
                                name="email"
                            />
                            <UserTextField
                                placeholder={this.props.currentUser ? this.props.currentUser.password : null}
                                onEditUser={(name, value) => this.handleChange(name, value)}
                                textFieldType="editUser"
                                id="outlined-password-input"
                                error="errorPassword"
                                label="Password"
                                type="password"
                                name="password"
                            />
                            <div style={{display: 'flex'}}>
                                <UserTextField
                                    placeholder={this.props.currentUser ? this.props.currentUser.name : null}
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-required-firstname"
                                    label="Voornaam"
                                    type="firstName"
                                    name="firstName"
                                />
                                <UserTextField
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-infix"
                                    label="Tussenvoegsel"
                                    type="infix"
                                    name="infix"
                                />
                                <UserTextField
                                    placeholder={this.props.currentUser ? this.props.currentUser.lastName : null}
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-required-lastName"
                                    label="Achternaam"
                                    type="lastName"
                                    name="lastName"
                                />
                            </div>
                            <UserTextField
                                placeholder={this.props.currentUser ? this.props.currentUser.street_Name : null}
                                onEditUser={(name, value) => this.handleChange(name, value)}
                                textFieldType="editUser"
                                id="outlined-required-street"
                                label="Straatnaam"
                                type="street"
                                name="street"
                            />
                            <UserTextField
                                placeholder={this.props.currentUser ? this.props.currentUser.city : null}
                                onEditUser={(name, value) => this.handleChange(name, value)}
                                textFieldType="editUser"
                                id="outlined-required-city"
                                label="Plaatsnaam"
                                type="city"
                                name="city"
                            />
                            <div style={{display: 'flex'}}>
                                <UserTextField
                                    placeholder={this.props.currentUser ? this.props.currentUser.postalcode : null}
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-required-postalcode"
                                    label="Postcode"
                                    type="postalCode"
                                    name="postalCode"
                                />
                                <UserTextField
                                    placeholder={this.props.currentUser ? this.props.currentUser.house_Number : null}
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-required-housenumber"
                                    label="Huisnummer"
                                    type="housenumber"
                                    name="housenumber"
                                />
                                <UserTextField
                                    placeholder={this.props.currentUser ? this.props.currentUser.addition : null}
                                    onEditUser={(name, value) => this.handleChange(name, value)}
                                    textFieldType="editUser"
                                    id="outlined-housenumberaddition"
                                    label="Toevoeging"
                                    type="houseNumberSuffix"
                                    name="houseNumberSuffix"
                                />
                            </div>
                            <UserTextField
                                placeholder={this.props.currentUser ? this.props.currentUser.telephone_Number : null}
                                onEditUser={(name, value) => this.handleChange(name, value)}
                                textFieldType="editUser"
                                id="outlined-phonenumber"
                                label="Telefoonnummer"
                                type="phoneNumber"
                                name="phoneNumber"
                            />
                            <button type="submit" className="primaryButton">Bevestigen</button>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Account;