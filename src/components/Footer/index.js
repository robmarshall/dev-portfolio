import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './footer.scss'
import '../../utils/sass/layout/layout.scss'

const Footer = ({ siteTitle }) => (
    <footer className="footer">
        <div className="container footer__wrap">
            <OutboundLink
                href="https://github.com/robmarshall"
                className="footer__link"
            >
                Robert Marshall
            </OutboundLink>{' '}
            &{' '}
            <OutboundLink
                href="https://www.gatsbyjs.org/"
                className="footer__link"
            >
                Gatsby
            </OutboundLink>
        </div>
    </footer>
)

export default Footer
