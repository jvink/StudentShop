import React, { Component } from 'react';
import image from '../../images/normal.png';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <div style={{width: '63%', margin: 'auto', display: 'flex'}}>
            <img src={image} style={{maxHeight: '48px', margin: '4px'}}/>
            <input style={{marginLeft: '8px', marginTop: '8px', marginBottom: '8px'}} placeholder="Waar ben je naar op zoek?"/>
            <button style={{marginTop: '8px', marginBottom: '8px', marginLeft: '-3px', borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}}><SearchIcon style={{color: '#7f8c8d'}}/></button>
        </div>
      </div>
    );
  }
}

export default Header;