import React from 'react'
import ProjectItem from '../ProjectItem'
import _ from 'lodash'
import './projectlist.scss'

const ProjectList = () => {
    const projects = [
        {
            name: 'Burtons Safes',
            desc: 'sfsfdsf',
            image: 'url',
            skills: ['HTML5', 'CSS3', 'SASS'],
            link: 'URL',
            source: 'source',
        },
        {
            name: 'Burtons Safesss',
            desc: 'sfsfdsf',
            image: 'url',
            skills: ['HTML5', 'CSS3', 'SASS'],
            link: 'URL',
            source: 'source',
        },
        {
            name: 'Burtons Safessss',
            desc: 'sfsfdsf',
            image: 'url',
            skills: ['HTML5', 'CSS3', 'SASS'],
            link: 'URL',
            source: 'source',
        },
    ]

    const projectItems = projects.map(project => (
        <ProjectItem
            key={_.kebabCase(project.name)}
            name={project.name}
            desc={project.desc}
            imageFileName={project.image}
            skills={project.skills || []}
            link={project.link || ''}
            source={project.source || ''}
        />
    ))

    return (
        <div className="projects-list">
            <div className="tight-container">
                <h2 className="projects-title">Featured Projects</h2>
                <div className="projects-list__wrap">{projectItems}</div>
            </div>
        </div>
    )
}

export default ProjectList
