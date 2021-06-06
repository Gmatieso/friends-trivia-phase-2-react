import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Trivia from './Trivia';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className='app-navbar'>
            <li><Link to='/home' className='app-navbar-link'>Home</Link></li>
            <li><Link to='/about' className='app-navbar-link'>About</Link></li>
            <li><Link to='/trivia' className='app-navbar-link'>Trivia</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/trivia' component={Trivia} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
