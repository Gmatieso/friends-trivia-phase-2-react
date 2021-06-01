import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInForm from './LogInForm';
import AboutPage from './AboutPage';
import Trivia from './Trivia';
import Comments from './Comments';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <Route path='/' component={LogInForm} />
          <Route path='/about' component={AboutPage} />
          <Route path='/trivia' component={Trivia} />
          <Route path='/comments' component={Comments} />
        </div>
      </Switch>
    );
  }
}

export default App;
