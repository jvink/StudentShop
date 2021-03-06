import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserTextField from '../UserTextField';
import UserRadioGroup from '../UserRadioGroup';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { TextValidator} from 'react-material-ui-form-validator';
import '../../styles/register.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeated: '',
        gender: '',
        firstName: '',
        infix: '',
        lastName: '',
        birthday: undefined,
        Street_Name: '',
        city: '',
        postalCode: '',
        housenumber: -1,
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

        ValidatorForm.addValidationRule('isValidDate', () => {
            var d = new Date(this.state.birthday);
            if (d instanceof Date && isFinite(d)) {
                return true;
            } else {
                return false;
            }
        });
    }
    
    handleChange(name, value) {
        this.setState({
            [name]: value,
        });
    };

    handleChange2 = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    onClickRegister() {
        let user = {
            email: this.state.email,
            password: this.state.password,
            passwordRepeated: this.state.passwordRepeated,
            gender: this.state.gender,
            firstName: this.state.firstName,
            infix: this.state.infix,
            lastName: this.state.lastName,
            birthday: this.state.birthday,
            Street_Name: this.state.Street_Name,
            city: this.state.city,
            postalCode: this.state.postalCode,
            houseNumber: Number(this.state.housenumber),
            houseNumberSuffix: this.state.houseNumberSuffix,
            phoneNumber: this.state.phoneNumber
        }

        this.props.register(user);
    }

    render() {
        const errors = this.props.errors ? this.props.errors : null;
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Registreren</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {Array.isArray(this.props.errors) ? errors.map((error, index) => {
                            return (
                                <span key={index}>{error.map((errorMessages, i) => {
                                    return <ul key={i} style={{color: 'red'}}>{errorMessages.errorMessage}</ul>
                                })}</span>
                            );
                        }) : <ul style={{color: 'red'}}>{errors}</ul>}
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
                                validators={'required'}
                                errorMessages={['Dit veld is vereist']}
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
                            <TextValidator
                                id="birthday"
                                label="Geboortedatum"
                                type="date"
                                value={this.state.birthday}
                                validators={['isValidDate']}
                                errorMessages={['Ongeldige geboortedatum']}
                                variant="outlined"
                                style={{marginTop: '1em'}}
                                onChange={this.handleChange2("birthday")}
                                name="birthday"
                                format={"MM/DD/YYYY"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <UserTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                textFieldType="register"
                                id="outlined-required-Street_Name"
                                validators={['required']}
                                errorMessages={['Dit veld is vereist']}
                                label="Straatnaam"
                                type="Street_Name"
                                name="Street_Name"
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