import { Link } from 'gatsby'
import React from 'react'
import Menu from '../Menu'
import './header.scss'
import '../../utils/sass/layout/layout.scss'

const Header = () => (
    <header className="header">
        <div className="container header_wrap">
            <Link className="header__link" to="/">
                RM
            </Link>

            <Menu />
        </div>
    </header>
)

export default Header
