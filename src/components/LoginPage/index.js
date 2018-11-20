import '../../styles/loginPage.css';
import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",

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
      alert(this.state.email + this.state.password);
      event.preventDefault();
    }

render() {
    return (
        <div className='bodyWrapper'>
        <form>
            <label>
                Emailadres:
          <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
            </label>
            <br />
            <br/>
            <label>
                Wachtwoord:
          <input
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
            </label>
            <br />
            <br/>
            <input type="submit" value="login" />
            <br/>
            <div className="registerLink"><a href="/register">Klik hier om te registreren</a></div>
        </form>
        </div>
        
        
    );
}
}

export default LoginPage;