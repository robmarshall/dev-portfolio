import React from 'react'
import ProjectItem from '../ProjectItem'
import _ from 'lodash'
import ScrollReveal from 'scrollreveal'
import './projectlist.scss'

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        import('scrollreveal').then(({ default: ScrollReveal }) => {
            const sr = ScrollReveal().reveal('.project-item', {
                distance: '50px',
                origin: 'top',
                delay: 250,
            })
        })
    }

    render() {
        const projects = [
            {
                name: 'Burtons Safes',
                desc: 'sfsfdsf',
                image: 'url',
                skills: ['html5', 'css3', 'sass'],
                link: 'URL',
                source: 'source',
            },
            {
                name: 'Burtons Safesss',
                desc: 'sfsfdsf',
                image: 'url',
                skills: ['html5', 'css3', 'sass'],
                link: 'URL',
                source: 'source',
            },
            {
                name: 'Burtons Safessss',
                desc: 'sfsfdsf',
                image: 'url',
                skills: ['html5', 'css3', 'sass'],
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
}

export default ProjectList
