import React from 'react'
import PropTypes from 'prop-types'
import RootImage from '../RootImage'

import thirdParty from '../../dataCollections/thirdParty'

import _ from 'lodash'
import Color from 'color'
import './projectitem.scss'

const ProjectItem = ({ name, desc, imageFileName, skills, link, source }) => {
    skills.sort()

    const skillList = skills.map(skill => (
        <li
            key={_.kebabCase(thirdParty[skill].title)}
            className="project__skilllist__item"
            style={{
                backgroundColor: thirdParty[skill].color,
                color: getCorrectColour(thirdParty[skill].color),
            }}
        >
            {thirdParty[skill].title}
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
            <div className="project-item__inner">
                <div className="project-item__content-wrap">
                    <h3 className="project-item__title">{name}</h3>
                    <p className="project-item__desc">{desc}</p>
                    {skillList && (
                        <ul className="project__skilllist">{skillList}</ul>
                    )}
                </div>
                <div className="project-item__outward-links">
                    {link && (
                        <a className="project-item__link" href={link}>
                            Live Site
                        </a>
                    )}
                    {source && (
                        <a className="project-item__source" href={source}>
                            View Source
                        </a>
                    )}
                </div>
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
