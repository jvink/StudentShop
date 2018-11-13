import '../../styles/registerPage.css';
import React, { Component } from 'react';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {naam: '', adres: '', postcode: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Naam:
          <input type="text" value={this.state.naam} onChange={this.handleInputChange} />
                </label>
                <label>
                    Adres:
          <input type="text" value={this.state.adres} onChange={this.handleInputChange} />
                </label>
                <label>
                    Postcode:
          <input type="text" value={this.state.postcode} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default RegisterPage;