import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav-bar">
            <h3>Articles-Blog</h3>
            <ul className="links">
                <li><Link to="/">Articles</Link></li>
                <li> <Link to="/Form">Add Article</Link></li>
            </ul>
        </div>
    )
}

export default Nav
