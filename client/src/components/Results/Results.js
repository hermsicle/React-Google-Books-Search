import React from 'react'
import './Results.css'

function Results(props) {
    return (
        <div className="resultsContainer">
            <h3>Book Title:</h3>
            <h4>Authors: </h4>
            <img src="" alt="" className="imgContainer"></img>
            <p>Description:</p>
            <button className="save">Save</button>
            <button className="view">View</button>
        </div>
    )
}

export default Results
