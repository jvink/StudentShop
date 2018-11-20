import '../../styles/registerPage.css';
import React, { Component } from 'react';

class RegisterPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
    naam: "",
        straatnaam: "",
        postcode: "",
        stad: "",
        huisnummer: "",
        toevoeging: ""

};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
    }
    
handleSubmit(event) {
      alert(this.state.value);
      event.preventDefault();
    }

render() {
    return (
        <form>
            <label>
                Hr./Mvr.:
          <select value={this.state.value} >
                    <option value="Hr.">Hr.</option>
                    <option value="Mvr.">Mvr.</option>
                    onChange={this.handleInputChange}
                </select>
            </label>
            <br />
            <label>
                Naam:
          <input
                    name="naam"
                    type="text"
                    value={this.state.naam}
                    onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Straatnaam:
          <input
                    name="straatnaam"
                    type="text"
                    value={this.state.straatnaam}
                    onChange={this.handleInputChange} />
            </label>
                <label>
                    Huisnummer:
          <input
                        name="huisnummer"
                        type="number"
                        value={this.state.huisnummer}
                        onChange={this.handleInputChange} />
            </label>
            <label>
                Toevoeging:
          <input
                    name="toevoeging"
                    type="text"
                    value={this.state.toevoeging}
                    onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Postcode:
          <input
                    name="postcode"
                    type="text"
                    value={this.state.postcode}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Stad:
          <input
                    name="stad"
                    type="text"
                    value={this.state.stad}
                    onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="submit" />
        </form>
    );
}
}

export default RegisterPage;