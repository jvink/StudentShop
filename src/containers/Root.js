import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

class Root extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/' component={NotFound} />
        </Switch>
      );
    }
}

export default Root;