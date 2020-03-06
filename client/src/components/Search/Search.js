import React from 'react'
import './Search.css'
import '../Results/Results'

function Search(props) {
    return (
        <div>
            <input type="text" className="searchBooks" placeholder="Search A Book"></input>
            <button onClick={props.click} type="submit" className="submitBtn">Submit</button>
        </div >
    )
}

export default Search


