import React, { Component } from 'react';
import Service from '../Service';
import '../../styles/service.css';
var json = require('../../mock.json');

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.setState({data: json});
  }

  render() {
    const listItems = this.state.data.map((s) =>
      <Service serviceData={s}/>
    );
    
    return (
        <div className="serviceListGrid">
            {listItems}
        </div>
    );
  }
}

export default ServiceList;