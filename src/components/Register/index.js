import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../../styles/login.css';

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
        postalCode: undefined,
        houseNumber: undefined,
        houseNumberSuffix: undefined
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div className="loginFormCardContainer">
                <Card className="loginFormCard">
                    <CardContent>
                        <h1>Registreren</h1>
                        <form className="formContainer" autoComplete="off">
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
                                id="outlined-password-input"
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
                                    id="outlined-required"
                                    label="Voornaam"
                                    value={this.state.firstName}
                                    onChange={this.handleChange('firstName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    style={{marginLeft: '.5em', marginRight: '.5em'}}
                                    id="outlined-required"
                                    label="Tussenvoegsel"
                                    value={this.state.infix}
                                    onChange={this.handleChange('infix')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Voornaam"
                                    value={this.state.lastName}
                                    onChange={this.handleChange('lastName')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <TextField
                                id="date"
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
                                id="outlined-required"
                                label="Straatnaam"
                                value={this.state.street}
                                onChange={this.handleChange('street')}
                                margin="normal"
                                variant="outlined"
                            />
                            <div style={{display: 'flex'}}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Postcode"
                                    value={this.state.postalCode}
                                    onChange={this.handleChange('postalCode')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    required
                                    style={{marginLeft: '.5em', marginRight: '.5em'}}
                                    id="outlined-required"
                                    label="Huisnummer"
                                    value={this.state.houseNumber}
                                    onChange={this.handleChange('houseNumber')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Toevoeging"
                                    value={this.state.houseNumberSuffix}
                                    onChange={this.handleChange('houseNumberSuffix')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardActions style={{display: 'flex'}}>
                        <button className="loginButton">Registreren</button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Register;