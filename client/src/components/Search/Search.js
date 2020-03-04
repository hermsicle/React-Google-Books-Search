import React from 'react'
import './Search.css'
import '../Results/Results'
import Results from '../Results/Results'

function Search() {
    return (
        <div>
            <input type="text" className="searchBooks" placeholder="Search A Book"></input>
            <input type="submit" className="submitBtn"></input>
            <Results></Results>
        </div>
    )
}

export default Search


