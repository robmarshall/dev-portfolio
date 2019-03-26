import React from 'react'
import PropTypes from 'prop-types'
import RootImage from '../RootImage'
import _ from 'lodash'
import Color from 'color'
import './projectitem.scss'

const ProjectItem = ({ name, desc, imageFileName, skills, link, source }) => {
    const skillBank = {
        html5: {
            title: 'HTML5',
            color: '#E34F26',
        },
        css3: {
            title: 'CSS3',
            color: '#005A9C',
        },
        sass: {
            title: 'SASS',
            color: '#c6538c',
        },
    }

    const skillList = skills.map(skill => (
        <li
            key={_.kebabCase(skill)}
            className="project__skilllist__item"
            style={{
                backgroundColor: skillBank[skill].color,
                color: getCorrectColour(skillBank[skill].color),
            }}
        >
            {skillBank[skill].title}
        </li>
    ))

    return (
        <div className="project-item">
            <div className="project-item__image-wrap">
                <RootImage
                    className="project-item__image"
                    filename={imageFileName}
                />
            </div>
            <div className="project-item__content-wrap">
                <h3>{name}</h3>
                <p>{desc}</p>
                {skillList && (
                    <ul className="project__skilllist">{skillList}</ul>
                )}
                {link && <a href={link}>Live Site</a>}
                {source && <a href={source}>View Source</a>}
            </div>
        </div>
    )
}

ProjectItem.defaultProps = {
    name: '',
    desc: '',
    image: '',
    skills: [],
    link: null,
    source: null,
}

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
    skills: PropTypes.array,
    link: PropTypes.string,
    source: PropTypes.string,
}

function getCorrectColour(backColour) {
    let color = Color(backColour)
    if (color.isLight(backColour)) {
        return '#000'
    } else {
        return '#fff'
    }
}

export default ProjectItem
