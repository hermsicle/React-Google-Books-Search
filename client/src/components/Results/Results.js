import React from 'react'
import './Results.css'

function Results(props) {
    return (
        <div className="resultsContainer">
            <h3>Book Title: {props.title}</h3>
            <h4>Authors: {props.author}</h4>
            <img src={props.image}
                alt=""
                className="imgContainer">
            </img>
            <p>Description:{props.description}</p>
            <p>Link: {props.link}</p>
            <button className="save">Save</button>
            <button className="view">View</button>
        </div>
    )
}

export default Results
