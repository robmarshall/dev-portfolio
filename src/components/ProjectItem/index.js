import React from 'react'
import PropTypes from 'prop-types'
import RootImage from '../RootImage'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import {
    GetCorrectTextColour,
    GetAccessibleBackColor,
} from '../../utils/helpers/SkillColor'
import slugify from '../../utils/slugify'

import thirdParty from '../../dataCollections/thirdParty'

import './projectitem.scss'

const ProjectItem = ({ name, desc, imageFileName, skills, link, source }) => {
    skills.sort()

    const skillList = skills.map(skill => (
        <li
            key={slugify(thirdParty[skill].title)}
            className="project__skilllist__item"
            style={{
                backgroundColor: GetAccessibleBackColor(
                    thirdParty[skill].color
                ),
                color: GetCorrectTextColour(thirdParty[skill].color),
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
                        <OutboundLink
                            className="project-item__link"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="This link will open up the live site in a new tab"
                        >
                            Live Site
                        </OutboundLink>
                    )}
                    {source && (
                        <OutboundLink
                            className="project-item__source"
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="This link will open up the source code in a new tab"
                        >
                            View Source
                        </OutboundLink>
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
    image: PropTypes.string.isRequired,
    skills: PropTypes.array,
    link: PropTypes.string,
    source: PropTypes.string,
}

export default ProjectItem
