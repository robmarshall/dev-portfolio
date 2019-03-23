import React from 'react'
import Color from 'color'
import './skilllist.scss'

const SkillList = () => {
    const skills = [
        { title: 'Sass', color: '#c6538c' },
        { title: 'JavaScript', color: '#F7DF1E' },
        { title: 'React', color: '#61dafb' },
        { title: 'ES6', color: '#F7DF1E' },
        { title: 'Node', color: '#F7F7F7' },
        { title: 'WordPress', color: '#F7F7F7' },
        { title: 'Gulp', color: '#E14A4D' },
        { title: 'NPM', color: '#C53635' },
        { title: 'Git', color: '#000000' },
        { title: 'WebPack', color: '#8ACFF3' },
    ]

    let skillList = skills.map(item => (
        <li
            key={item.title}
            style={{
                backgroundColor: item.color,
                color: getCorrectColour(item.color),
            }}
            className="skilllist__item"
        >
            {item.title}
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
