import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './components/Home'
import DoctorDetail from './components/DoctorDetail'
export const history = createBrowserHistory()

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
        <Route path="/" exact component={Home} />
        <Route path="/doctors/:doctor" component={DoctorDetail} />
        </div>
      </Router>
    );
  }
}

export default App;