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

  constructor(props) {
    super(props);
    this.State = {
      bookData: {
        title: '',
        author: '',
        description: '',
        image: '',
        link: ''
      },
      value: '',
    };
    this.handleClick = this.handleClick.bind(this)
    this.userInput = this.userInput.bind(this)
    this.getBook = this.getBook.bind(this)
  }

  getBook() {
    const userInput = this.state.value
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=:${userInput}`
      ).then(bookData => {
        let bookItems = bookData.data.items;
        for (let i = 0; i < bookItems.length; i++) {
          //console.log(bookItems[i])
          const book = {
            title: bookItems[i].volumeInfo.title,
            author: bookItems[i].volumeInfo.authors,
            description: bookItems[i].volumeInfo.description,
            image: bookItems[i].volumeInfo.imageLinks,
            link: bookItems[i].volumeInfo.infoLink
          }
          this.setState({
            bookData: book
          })
          console.log(this.state.bookData)
        }
      })
  }

  handleClick() {
    this.getBook();
    console.log('User has inputted: ' + this.state.value)
  }

  userInput(event) {
    this.setState({
      value: event.target.value
    })
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
              <Search
                click={this.handleClick}
                value={this.userInput}
              />
              <Results
                book={this.renderResults}
              >
              </Results>
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