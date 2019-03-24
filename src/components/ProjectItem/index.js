import React from 'react'
import PropTypes from 'prop-types'
import RootImage from '../RootImage'
import './projectitem.scss'

const ProjectItem = ({ name, desc, imageFileName, skills, link, source }) => {
    const skillList = skills.map(skill => (
        <li className="project__skilllist__item">{skill}</li>
    ))

    return (
        <div className="project-item">
            <RootImage filename={imageFileName} />
            <h3>{name}</h3>
            <p>{desc}</p>
            {skillList && <ul className="project__skilllist">{skillList}</ul>}
            {link && <a href={link}>Live Site</a>}
            {source && <a href={source}>View Source</a>}
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

export default ProjectItem
