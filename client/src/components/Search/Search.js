import React from 'react'
import './Search.css'
import '../Results/Results'

function Search(props) {
    return (
        <div className="bookSearch">
            <input
                type="text"
                className="searchBooks"
                placeholder="Search A Book"
                onChange={props.value}
            >
            </input>

            <button
                onClick={props.click} type="submit"
                className="submitBtn"
                value="submit">
                Submit
            </button>

            <div className="searchResults">

            </div>
        </div >
    )
}

export default Search


