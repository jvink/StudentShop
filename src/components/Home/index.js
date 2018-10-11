import React, { Component } from 'react';
import ServiceList from '../ServiceList';
import '../../styles/home.css';

class Home extends Component {

  render() {
    return (
      <div className="wrapperHome">
        <div>
        <div className="homeAdvertisment">
          <div className="homeAdvertismentTitle">
          <div className="homeAdvertismentTitleText">
            Alles wat jij nodig hebt om
            <br/>
            het jaar door te komen!
          </div>
          </div>
        </div>
          <ServiceList />
        </div>
      </div>
    );
  }
}

export default Home;