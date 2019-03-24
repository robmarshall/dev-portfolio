import React from 'react'
import Color from 'color'
import DynamicSort from '../../utils/helpers/DynamicSort'
import './skilllist.scss'

const SkillList = () => {
    const skills = [
        { title: 'Sass', color: '#c6538c', link: 'https://sass-lang.com/' },
        {
            title: 'JavaScript',
            color: '#F7DF1E',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        { title: 'React', color: '#61dafb', link: 'https://reactjs.org/' },
        {
            title: 'ES6',
            color: '#F7DF1E',
            link: 'https://en.wikipedia.org/wiki/ECMAScript',
        },
        { title: 'Node', color: '#026e00', link: 'https://nodejs.org/en/' },
        {
            title: 'WordPress',
            color: '#663399',
            link: 'https://wordpress.org/',
        },
        {
            title: 'Gatsby',
            color: '#207196',
            link: 'https://www.gatsbyjs.org/',
        },
        { title: 'Grav', color: '#977cad', link: 'https://getgrav.org/' },
        { title: 'Gulp', color: '#E14A4D', link: 'https://gulpjs.com/' },
        { title: 'NPM', color: '#C53635', link: 'https://www.npmjs.com/' },
        {
            title: 'Git',
            color: '#000000',
            link: 'https://github.com/robmarshall',
        },
        { title: 'WebPack', color: '#8ACFF3', link: 'https://webpack.js.org/' },
    ]

    // Sort the list by title
    skills.sort(DynamicSort('title'))

    let skillList = skills.map(item => (
        <li key={item.title} className="skilllist__item">
            <a
                className="skilllist__item__link"
                title={`External link to ${item.title}`}
                href={item.link}
                style={{
                    backgroundColor: item.color,
                    color: getCorrectColour(item.color),
                }}
            >
                {item.title}
            </a>
        </li>
    ))

    return (
        <div className="skilllist">
            <p className="skilllist__title">I use:</p>
            <ul className="skilllist__list">{skillList}</ul>
        </div>
    )
}

function getCorrectColour(backColour) {
    let color = Color(backColour)
    if (color.isLight(backColour)) {
        return '#000'
    } else {
        return '#fff'
    }
}

export default SkillList
