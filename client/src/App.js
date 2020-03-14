import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import axios from 'axios'
//import Results from './components/Results/Results';
import Saved from './components/Saved/Saved';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      savedBooks: [],
      value: '',
    };
    this.handleClick = this.handleClick.bind(this)
    this.userInput = this.userInput.bind(this)
    this.getBook = this.getBook.bind(this)
    this.renderAll = this.renderAll.bind(this)
    this.instanceFunction = this.instanceFunction.bind(this)
  }

  async getBook() {
    const userInput = this.state.value
    const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=:${userInput}`);
    let bookItems = bookData.data.items;
    let mybooks = []
    for (let i = 0; i < bookItems.length; i++) {
      //console.log(bookItems[i])
      const book = {
        title: bookItems[i].volumeInfo.title,
        author: bookItems[i].volumeInfo.authors,
        description: bookItems[i].volumeInfo.description,
        image: bookItems[i].volumeInfo.imageLinks.thumbnail,
        link: bookItems[i].volumeInfo.infoLink
      };
      mybooks.push(book)
    }
    this.setState({
      bookData: mybooks
    },
      () => console.log(this.state.bookData)
    )
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

  instanceFunction(index) {
    axios.post("/api/books", this.state.bookData[index])
      .then(response =>
        console.log(response))
  }

  renderAll() {
    return (this.state.bookData.map((book, index) => {
      return (
        <div className="resultsContainer" key={index}>
          <h3 className="title">Book Title: {book.title}</h3>
          <h4>Authors: {book.author}</h4>
          <img src={book.image} alt="" className="imgContainer"></img>
          <p>Description:{book.description}</p>
          <p>Link: {book.link}</p>
          <button className="save" onClick={() => this.instanceFunction(index)}>Save</button>
          <button className="view">View</button>
        </div>
      )
    })
    )
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => {
        const book = res.data;
        this.setState({ savedBooks: book })
      })
  }

  renderSavedBooks() {
    return (this.state.savedBooks.map((books, index) => {
      return (
        <div className="savedContainer" key={index}>
          <h3 className="savedTitle">Book Title: {books.title}</h3>
          <h4>Authors: {books.author}</h4>
          <img src={books.image}
            alt=""
            className="imgContainer">
          </img>
          <p>Description:{books.description}</p>
          <p>Link: {books.link}</p>
          <button className="delete" onClick={() => this.deleteBook()}>delete</button>
          <button className="view">View</button>
        </div >
      )
    })
    )
  }

  deleteBook() {
    axios.get("/api/books/:")
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
              {this.renderAll()}
              {/* <Results
                title={this.state.bookData.title}
                author={this.state.bookData.author}
                image={this.state.bookData.image}
                description={this.state.bookData.description}
                link={this.state.bookData.link}
              >
              </Results> */}
            </Route>

            <Route exact path="/saved">
              <Saved
              >
              </Saved>
              {this.renderSavedBooks()}
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;