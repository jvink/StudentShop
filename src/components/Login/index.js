import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
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

    goToRegister() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className="loginFormCardContainer">
                <Card className="loginFormCard">
                    <CardContent>
                        <h1>Login</h1>
                        {this.props.error === true ? <p style={{color: 'red'}}>Invalid credentials</p> : null}
                        {this.props.loading === true ? <CircularProgress/> : null}
                        <form className="loginFormContainer" autoComplete="off">
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
                        <button className="secondaryButton" onClick={() => this.goToRegister()}>Registreren</button>
                        <button className="primaryButton" onClick={() => this.props.login(this.state.email, this.state.password)}>Login</button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login);