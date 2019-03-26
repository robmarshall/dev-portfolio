import React from 'react'
import { Link } from 'gatsby'
import './menu.scss'

const Menu = () => (
    <div className="menu">
        <ul>
            <li key="test">
                <Link to="/#1">Test</Link>
            </li>
            <li key="test2">
                <Link to="/#2">Test2</Link>
            </li>
        </ul>
    </div>
)

export default Menu
