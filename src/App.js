import React, { Component } from 'react';
import LogInForm from './LogInForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Trivia from './Trivia';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={LogInForm} />
        <Trivia />
      </div>
    );
  }
}

export default App;
