import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <div>
        <Link to="/">
            <h3>logo</h3>
        </Link>
        <ul>
            <Link to="/about">
                <li>about</li>
            </Link>
            <Link to="/list">
                <li>list</li>
            </Link>
        </ul>
    </div>
  );
}

export default Nav;