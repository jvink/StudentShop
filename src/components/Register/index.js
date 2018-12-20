import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import UserRadioGroup from '../UserRadioGroup';
import { ValidatorForm } from 'react-material-ui-form-validator';
import '../../styles/register.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class Register extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeated: '',
        gender: '',
        firstName: '',
        infix: '',
        lastName: '',
        age: -1,
        street: '',
        city: '',
        postalCode: '',
        houseNumber: -1,
        houseNumberSuffix: '',
        phoneNumber: -1
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }
    
    handleChange(name, value) {
        this.setState({
            [name]: value,
        });
    };

    onClickRegister() {
        let user = {
            email: this.state.email,
            password: this.state.password,
            passwordRepeated: this.state.passwordRepeated,
            gender: this.state.gender,
            firstName: this.state.firstName,
            infix: this.state.infix,
            lastName: this.state.lastName,
            age: this.state.age,
            street: this.state.street,
            city: this.state.city,
            postalCode: this.state.postalCode,
            houseNumber: this.state.houseNumber,
            houseNumberSuffix: this.state.houseNumberSuffix,
            phoneNumber: this.state.phoneNumber
        }

        this.props.register(user);
        toastr.light('Succesvol geregistreerd! Log nu in om te beginnen.', toastrOptions);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Registreren</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <ValidatorForm
                            ref="form"
                            onSubmit={() => this.onClickRegister()}
                        >
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-email-input"
                                validators={['required', 'isEmail']}
                                errorMessages={['Dit veld is vereist', 'Ongeldig emailadres']}
                                error="errorEmail"
                                label="Email"
                                type="email"
                                name="email"
                            />
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-password-input"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Wachtwoord"
                                type="password"
                                name="password"
                            />
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-password-repeat-input"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['Wachtwoorden zijn niet gelijk aan elkaar', 'Dit veld is vereist']}
                                label="Herhaal wachtwoord"
                                type="password"
                                name="passwordRepeated"
                            />
                            <UserRadioGroup
                                name="gender"
                                onRegister={(name, value) => this.handleChange(name, value)}
                                options={[{value: "man", label: "Man"}, {value: "vrouw", label: "Vrouw"}]}
                            />
                            <div style={{display: 'flex'}}>
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-required-firstname"
                                    validators={['required']}
                                    errorMessages={['Dit veld is vereist']}
                                    label="Voornaam"
                                    type="firstName"
                                    name="firstName"
                                />
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-infix"
                                    label="Tussenvoegsel"
                                    type="infix"
                                    name="infix"
                                />
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-required-lastName"
                                    validators={['required']}
                                    errorMessages={['Dit veld is vereist']}
                                    label="Achternaam"
                                    type="lastName"
                                    name="lastName"
                                />
                            </div>
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-required-age"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Leeftijd"
                                type="age"
                                name="age"
                            />
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-required-street"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Straatnaam"
                                type="street"
                                name="street"
                            />
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-required-city"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Plaatsnaam"
                                type="city"
                                name="city"
                            />
                            <div style={{display: 'flex'}}>
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-required-postalcode"
                                    validators={['required']}
                                    errorMessages={['Dit veld is vereist']}
                                    label="Postcode"
                                    type="postalCode"
                                    name="postalCode"
                                />
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-required-housenumber"
                                    validators={['required']}
                                    errorMessages={['Dit veld is vereist']}
                                    label="Huisnummer"
                                    type="housenumber"
                                    name="housenumber"
                                />
                                <UserTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    textFieldType="register"
                                    id="outlined-housenumberaddition"
                                    label="Toevoeging"
                                    type="houseNumberSuffix"
                                    name="houseNumberSuffix"
                                />
                            </div>
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-phonenumber"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Telefoonnummer"
                                type="phoneNumber"
                                name="phoneNumber"
                            />
                            <button type="submit" className="primaryButton">Registreren</button>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Register;