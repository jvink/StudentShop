import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import RegisterTextField from '../RegisterTextField';
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
        dateOfBirth: '',
        street: '',
        city: '',
        postalCode: '',
        houseNumber: '',
        houseNumberSuffix: '',
        phoneNumber: ''
    };
    
    handleChange(name, value) {
        console.log(name, value)
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

    render() {
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Registreren</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Er ging iets verkeerd. Probeer het opnieuw alstublieft.</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <form className="registerFormContainer" autoComplete="off">
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                name="email"
                            />
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-password-input"
                                label="Wachtwoord"
                                type="password"
                                name="password"
                            />
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-password-repeat-input"
                                label="Herhaal wachtwoord"
                                type="passwordRepeated"
                                name="passwordRepeated"
                            />
                            <RadioGroup
                                aria-label="gender"
                                name="gender2"
                                style={{display: 'flex', flexDirection: 'row'}}
                                value={this.state.gender}
                                onChange={this.handleChange('gender')}
                            >
                                <FormControlLabel
                                    value="man"
                                    control={<Radio color="primary" />}
                                    label="Man"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="vrouw"
                                    control={<Radio color="primary" />}
                                    label="Vrouw"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                            <div style={{display: 'flex'}}>
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-required-firstname"
                                    label="Voornaam"
                                    type="firstName"
                                    name="firstName"
                                />
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-infix"
                                    label="Tussenvoegsel"
                                    type="infix"
                                    name="infix"
                                />
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-required-lastName"
                                    label="Achternaam"
                                    type="lastName"
                                    name="lastName"
                                />
                            </div>
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-required-age"
                                label="Leeftijd"
                                type="age"
                                name="age"
                            />
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-required-street"
                                label="Straatnaam"
                                type="street"
                                name="street"
                            />
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-required-city"
                                label="Plaatsnaam"
                                type="city"
                                name="city"
                            />
                            <div style={{display: 'flex'}}>
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-required-postalcode"
                                    label="Postcode"
                                    type="postalCode"
                                    name="postalCode"
                                />
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-required-housenumber"
                                    label="Huisnummer"
                                    type="housenumber"
                                    name="housenumber"
                                />
                                <RegisterTextField
                                    onRegister={(name, value) => this.handleChange(name, value)}
                                    id="outlined-housenumberaddition"
                                    label="Toevoeging"
                                    type="houseNumberSuffix"
                                    name="houseNumberSuffix"
                                />
                            </div>
                            <RegisterTextField
                                onRegister={(name, value) => this.handleChange(name, value)}
                                id="outlined-phonenumber"
                                label="Telefoonnummer"
                                type="phoneNumber"
                                name="phoneNumber"
                            />
                        </form>
                    </CardContent>
                    <CardActions style={{display: 'flex'}}>
                        <button onClick={() => this.onClickRegister()} className="primaryButton">Registreren</button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Register;