import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  primaryButton: {
      backgroundColor: '#e74c3c',
      color: '#fff',
      margin: '1em'
  }
});

class OrderDone extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div style={{width: '100%', textAlign: 'center', margin: '2em'}}>
        <h1>Bedankt voor uw bestelling!</h1>
        <p>
          Uw bestelling is succesvol afgerond.
        </p>
        <br/>
        <p>
          We hebben een e-mail naar u gestuurd met de gegevens van de bestelling.
        </p>
        <Button variant="contained" className={classes.primaryButton} onClick={() => this.props.history.push('/')} style={{flex: 1, marginRight: '.3em'}}>
            Terug naar de webshop
            <HomeIcon style={{marginLeft: '.1em'}}/>
        </Button>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(OrderDone));