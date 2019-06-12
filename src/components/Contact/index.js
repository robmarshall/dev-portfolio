import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './contact.scss'

const Contact = () => (
    <div className="contact">
        <div className="tight-container">
            <div className="contact__email-link">
                Want to work together?{' '}
                <OutboundLink
                    href="mailto:hello@robertmarshall.dev"
                    className="contact__email-link__link"
                    title="I am happy to talk though whatever you need. Pop me a message and lets have a chat!"
                >
                    Get in touch!
                </OutboundLink>
            </div>
            <div className="contact__sub-links">
                <OutboundLink
                    href="https://github.com/robmarshall"
                    className="contact__sub-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open a new tab to GitHub"
                >
                    GitHub
                </OutboundLink>
                <OutboundLink
                    href="https://codepen.io/RobertMarshall"
                    className="contact__sub-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open a new tab to CodePen"
                >
                    CodePen
                </OutboundLink>
                <OutboundLink
                    href="https://www.linkedin.com/in/robert-marshall-86775883/"
                    className="contact__sub-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open a new tab to LinkedIn"
                >
                    LinkedIn
                </OutboundLink>
                <OutboundLink
                    href="mailto:hello@robertmarshall.dev"
                    className="contact__sub-links__link"
                    title="Email Rob to have a chat!"
                >
                    Email
                </OutboundLink>
            </div>
        </div>
    </div>
)

export default Contact
