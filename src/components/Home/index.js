import React, { Component } from 'react';
import Product from '../../containers/Product';
import '../../styles/home.css';

class Home extends Component {

  render() {
    return (
      <div className="wrapperHome">
        <div className="homeAdvertisment">
          <div className="homeAdvertismentTitle">
            <div className="homeAdvertismentTitleText">
              Alles wat jij nodig hebt om
              <br/>
              het jaar door te komen!
            </div>
          </div>
        </div>
        <Product display="column"/>
      </div>
    );
  }
}

export default Home;