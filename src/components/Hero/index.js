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
                    fullstack developer
                </OutboundLink>{' '}
                living in Leeds - UK, currently working for{' '}
                <OutboundLink
                    href="https://www.homeagency.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open up the Home Website in a new tab"
                >
                    Home
                </OutboundLink>
            </h1>
            <SkillList />
        </div>
    </div>
)

export default Hero
