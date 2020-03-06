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
      bookData: {}
    };
    this.handleClick = this.handleClick.bind(this)
    this.setData = this.setData.bind(this)
  }

  setData(data) {
    this.setState(
      {
        bookData: data
      }
    )
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:harry`
      ).then(bookData => {
        const book = {
          title: bookData.data.items[0].volumeInfo.title,
          author: bookData.data.items[0].volumeInfo.authors,
          description: bookData.data.items[0].volumeInfo.description,
          image: bookData.data.items[0].volumeInfo.imageLinks.thumbnail,
          link: bookData.data.items[0].volumeInfo.infoLink
        }
        this.setData(book)
        console.log(book.title)
        console.log(book.author)
        console.log(book.description)
        console.log(book.image)
        console.log(book.link)
      })
  }

  handleClick() {

    console.log('testing to see if button works')
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
              <Search click={this.handleClick} />
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