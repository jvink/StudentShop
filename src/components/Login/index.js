import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import '../../styles/login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
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
                        <h1>Login</h1>
                        <form className="formContainer" autoComplete="off">
                            <TextField
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
                        </form>
                    </CardContent>
                    <CardActions style={{display: 'flex'}}>
                        <button className="registerButton">Registreren</button>
                        <button className="loginButton">Login</button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Login;