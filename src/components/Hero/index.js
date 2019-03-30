import React from 'react'
import SkillList from '../SkillList'
import './hero.scss'

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="hero__title">
                I'm{' '}
                <a
                    href="https://twitter.com/robertmars"
                    target="_blank"
                    title="This link will open up Twitter in a new tab"
                >
                    Robert Marshall
                </a>
                , a{' '}
                <a
                    href="https://github.com/robmarshall"
                    target="_blank"
                    title="This link will open up GitHub in a new tab"
                >
                    fullstack developer
                </a>{' '}
                living in Leeds, currently working for{' '}
                <a
                    href="https://www.fox.agency"
                    target="_blank"
                    title="This link will open up the Fox Agency Website in a new tab"
                >
                    Fox Agency
                </a>
            </h1>
            <SkillList />
        </div>
    </div>
)

export default Hero
