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
      bookData: {},
      value: ''
    };
    this.handleClick = this.handleClick.bind(this)
    this.setData = this.setData.bind(this)
    this.userInput = this.userInput.bind(this)
    this.getBook = this.getBook.bind(this)
  }

  setData(data) {
    this.setState(
      {
        bookData: data
      }
    )
  }

  getBook() {
    const userInput = this.state.value
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=:${userInput}`
      ).then(bookData => {
        for (let i = 0; i < bookData.data.items.length; i++) {
          console.log(bookData.data.items[i])
          const book = {
            title: bookData.data.items[i].volumeInfo.title,
            author: bookData.data.items[i].volumeInfo.authors,
            description: bookData.data.items[i].volumeInfo.description,
            image: bookData.data.items[i].volumeInfo.imageLinks.thumbnail,
            link: bookData.data.items[i].volumeInfo.infoLink
          }
          this.setData(book)
          console.log(book.title)
          console.log(book.author)
          console.log(book.description)
          console.log(book.image)
          console.log(book.link)
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