import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class RegisterTextField extends Component {
    state = {
        [this.props.name]: '',
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        }, () => this.props.onRegister(this.props.name, this.state[this.props.name]));
    };

    render() {
        return (
            <TextField
                required
                id={this.props.id}
                label={this.props.label}
                value={this.state[this.props.name]}
                type={this.props.type}
                name={this.props.name}
                fullWidth
                onChange={this.handleChange(this.props.name)}
                margin="normal"
                variant="outlined"
            />
        )
    }
}