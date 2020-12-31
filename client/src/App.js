import React, { Component } from 'react';
import IndeedDisplayList from './components/IndeedDisplayList';
import IndeedForm from './components/IndeedForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={IndeedDisplayList} />
            <Route exact path="/jobForm" component={IndeedForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
