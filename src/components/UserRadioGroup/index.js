import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default class UserTextField extends Component {
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
            <RadioGroup
                aria-label={this.props.name}
                name={this.props.name}
                style={{display: 'flex', flexDirection: 'row'}}
                value={this.state[this.props.name]}
                onChange={this.handleChange(this.props.name)}
            >
                {this.props.options.map((option) => {
                    return (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio color="primary" />}
                            label={option.label}
                            labelPlacement="start"
                        />
                    )
                })}
            </RadioGroup>
        )
    }
}