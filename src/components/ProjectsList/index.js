import React from 'react'
import ProjectItem from '../ProjectItem'
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
            name: 'Burtons Safes',
            desc: 'sfsfdsf',
            image: 'url',
            skills: ['HTML5', 'CSS3', 'SASS'],
            link: 'URL',
            source: 'source',
        },
        {
            name: 'Burtons Safes',
            desc: 'sfsfdsf',
            image: 'url',
            skills: ['HTML5', 'CSS3', 'SASS'],
            link: 'URL',
            source: 'source',
        },
    ]

    const projectItems = projects.map(project => (
        <ProjectItem
            name={project.name}
            desc={project.desc}
            imageFileName={project.image}
            skills={project.skills || []}
            link={project.link || ''}
            source={project.source || ''}
        />
    ))

    return (
        <div className="project-list">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="project-list__wrap">{projectItems}</div>
            </div>
        </div>
    )
}

export default ProjectList
