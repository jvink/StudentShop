import React, { Component } from 'react';
import { TextValidator} from 'react-material-ui-form-validator';

export default class UserTextField extends Component {
    state = {
        [this.props.name]: '',
        [this.props.error]: ''
    };
    
    handleChange = name => event => {
        switch (this.props.textFieldType) {
            case "register":
                this.setState({
                    [name]: event.target.value,
                }, () => this.props.onRegister(this.props.name, this.state[this.props.name]));
                break;
            case "editUser":
                this.setState({
                    [name]: event.target.value,
                }, () => this.props.onEditUser(this.props.name, this.state[this.props.name]));
                break;
            case "addProduct":
                this.setState({
                    [name]: event.target.value,
                }, () => this.props.onAddProduct(this.props.name, this.state[this.props.name]));
                break;
            default:
                this.setState({
                    [name]: event.target.value,
                });
                break;
        }
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