import React, { Component } from 'react';
import { TextValidator} from 'react-material-ui-form-validator';

export default class RegisterTextField extends Component {
    state = {
        [this.props.name]: '',
        [this.props.error]: ''
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        }, () => this.props.onRegister(this.props.name, this.state[this.props.name]));
    };

    render() {
        return (
            <TextValidator
                validators={this.props.validators}
                errorMessages={this.props.errorMessages}
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