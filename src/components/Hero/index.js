import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SkillList from '../SkillList'
import './hero.scss'

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="hero__title">
                I'm{' '}
                <OutboundLink
                    href="https://twitter.com/robertmars"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open up Twitter in a new tab"
                >
                    Robert Marshall
                </OutboundLink>
                , a{' '}
                <OutboundLink
                    href="https://github.com/robmarshall"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open up GitHub in a new tab"
                >
                    frontend developer
                </OutboundLink>{' '}
                living in Leeds - UK.
            </h1>
            <SkillList />
        </div>
    </div>
)

export default Hero
