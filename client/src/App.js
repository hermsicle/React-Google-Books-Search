import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';

class App extends Component {

  constructor() {
    super();
    this.setState = {};
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route>
              <Search></Search>
            </Route>
            <Route>

            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;