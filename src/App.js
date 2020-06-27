import React, { Component } from 'react';
import './styles/styles.css'
import Header from './components/layouts/Header';
import Projects from './components/projects/Projects';


import {HashRouter, Switch, Route} from 'react-router-dom';
import Requirements from './components/projects/requirements/Requirements';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="whole-wrapper">
          <Header />
          <Switch>
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/users" component={Users} /> */}
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
