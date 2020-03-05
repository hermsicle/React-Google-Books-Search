import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import axios from 'axios'
import Results from './components/Results/Results';
import Saved from './components/Saved/Saved';

class App extends Component {

  constructor() {
    super();
    this.setState =
    {
      books: []
    };
  }


  getBooks = () => {
    axios.get('/')
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Link to="/" className="link">Home</Link>
          <br></br>
          <Link to="/saved" className="link">Saved Books</Link>
          <Switch>

            <Route exact path="/">
              <Search></Search>
              <Results></Results>
            </Route>

            <Route exact path="/saved">
              <Saved></Saved>
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;