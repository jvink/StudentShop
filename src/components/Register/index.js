import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../../styles/register.css';

const toastrOptions = {
    icon: 'success',
    status: 'success'
};

class Register extends Component {
    state = {
        email: undefined,
        password: undefined,
        passwordRepeated: undefined,
        gender: undefined,
        firstName: undefined,
        infix: undefined,
        lastName: undefined,
        dateOfBirth: undefined,
        street: undefined,
        city: undefined,
        postalCode: undefined,
        houseNumber: undefined,
        houseNumberSuffix: undefined,
        phoneNumber: undefined
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
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
            dateOfBirth: this.state.dateOfBirth,
            street: this.state.street,
            city: this.state.city,
            postalCode: this.state.postalCode,
            houseNumber: this.state.houseNumber,
            houseNumberSuffix: this.state.houseNumberSuffix,
            phoneNumber: this.state.phoneNumber
        }
        console.log(user);
        this.props.register(user);
        toastr.light('Succesvol geregistreerd! Log nu in om te beginnen.', toastrOptions);
    }

    render() {
        return (
            <div className="registerFormCardContainer">
                <Card className="registerFormCard">
                    <CardContent>
                        <h1>Registreren</h1>
                        <form className="registerFormContainer" autoComplete="off">
                            <TextField
                                required
                                id="outlined-email-input"
                                label="Email"
                                value={this.state.email}
                                type="email"
                                name="email"
                                fullWidth
                                onChange={this.handleChange('email')}
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Wachtwoord"
                                className="formTextfield"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                required
                                id="outlined-password-repeat-input"
                                label="Herhaal wachtwoord"
                                className="formTextfield"
                                type="password"
                                value={this.state.passwordRepeated}
                                onChange={this.handleChange('passwordRepeated')}
                                fullWidth
                                variant="outlined"
                                margin="normal"
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
                                <TextField
                                    required
                                    id="outlined-required-firstname"
                                    label="Voornaam"
                                    value={this.state.firstName}
                                    onChange={this.handleChange('firstName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    style={{marginLeft: '.5em', marginRight: '.5em'}}
                                    id="outlined-infix"
                                    label="Tussenvoegsel"
                                    value={this.state.infix}
                                    onChange={this.handleChange('infix')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    required
                                    id="outlined-required-lastname"
                                    label="Achternaam"
                                    value={this.state.lastName}
                                    onChange={this.handleChange('lastName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <TextField
                                id="date"
                                required
                                label="Geboortedatum"
                                value={this.state.dateOfBirth}
                                onChange={this.handleChange('dateOfBirth')}
                                type="date"
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required-street"
                                label="Straatnaam"
                                value={this.state.street}
                                onChange={this.handleChange('street')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required-city"
                                label="Plaatsnaam"
                                value={this.state.city}
                                onChange={this.handleChange('city')}
                                margin="normal"
                                variant="outlined"
                            />
                            <div style={{display: 'flex'}}>
                                <TextField
                                    required
                                    id="outlined-required-postalcode"
                                    label="Postcode"
                                    value={this.state.postalCode}
                                    onChange={this.handleChange('postalCode')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    required
                                    style={{marginLeft: '.5em', marginRight: '.5em'}}
                                    id="outlined-required-housenumber"
                                    label="Huisnummer"
                                    value={this.state.houseNumber}
                                    onChange={this.handleChange('houseNumber')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-housenumberaddition"
                                    label="Toevoeging"
                                    value={this.state.houseNumberSuffix}
                                    onChange={this.handleChange('houseNumberSuffix')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <TextField
                                id="outlined-phonenumber"
                                label="Telefoonnummer"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange('phoneNumber')}
                                margin="normal"
                                variant="outlined"
                            />
                        </form>
                    </CardContent>
                    <CardActions style={{display: 'flex'}}>
                        <button className="primaryButton">Registreren</button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Register;