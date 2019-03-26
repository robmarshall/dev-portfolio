import React from 'react'
import SkillList from '../SkillList'
import './hero.scss'

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="hero__title">
                I'm <a href="https://twitter.com/robertmars">Robert Marshall</a>
                , a <a href="https://github.com/robmarshall">developer</a>{' '}
                living in Leeds, currently working for{' '}
                <a href="https://www.fox.agency">Fox Agency</a>
            </h1>
            <SkillList />
        </div>
    </div>
)

export default Hero
