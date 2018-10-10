import React, { Component } from 'react';
import '../../styles/detailproduct.css';
import Service from '../Service';
var json = require('../../mock.json');

class DetailProduct extends Component {
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
        const currentProduct = this.state.data.find(x => x.id === parseInt(this.props.match.params.id));
        return (
            <div className="wrapperDetailProduct">
                <Service serviceData={currentProduct}/>
            </div>
        );
    }
}

export default DetailProduct;