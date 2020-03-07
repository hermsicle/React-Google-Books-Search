import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <h3 className="appName">Google Books</h3>
            <a href="/">Search</a>
            <a href="/saved">Saved</a>
        </div>
    )
}

export default Nav
