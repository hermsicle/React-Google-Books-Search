import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Router>
        <Nav />
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
