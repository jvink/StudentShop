import React, { Component } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import '../../styles/home.css';

class Home extends Component {

  render() {
    return (
      <div className="wrapperHome">
        <div className="homeAdvertisment">
          <div className="homeAdvertismentTitle">
            Laat het doen door een student!
          </div>
          <button className="homeAdvertismentGetStartedButton">
            Meer info
          </button>
        </div>
        <ServiceList />
      </div>
    );
  }
}

export default Home;