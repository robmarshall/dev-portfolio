import React from 'react'
import ProjectItem from '../ProjectItem'
import _ from 'lodash'
import Fade from 'react-reveal/Fade'
import './projectlist.scss'

class ProjectList extends React.Component {
    render() {
        const projects = [
            {
                name: 'Developer Portfolio',
                desc:
                    'This site! A Gatsby driven SPA that uses leading technologies to create a super fast, 100% lighthouse audit passing portfolio website. Hosted on Github pages.',
                image: 'tns-project.jpg',
                skills: [
                    'html5',
                    'sass',
                    'gatsby',
                    'github',
                    'netlify',
                    'graphql',
                    'es6',
                ],
                source: 'https://github.com/robmarshall/dev-portfolio',
            },
            {
                name: 'Thoughts and Stuff Blog',
                desc:
                    'An ongoing project - my blog. Built with a WordPress backend, and a GatbsyJS frontend. Automatically deployed to Netlify from Github.',
                image: 'tns-project.jpg',
                skills: [
                    'html5',
                    'sass',
                    'gatsby',
                    'wordpress',
                    'netlify',
                    'graphql',
                    'es6',
                ],
                link: 'http://thoughtsandstuff.com',
                source: 'https://github.com/robmarshall/gatsby-tns',
            },
        ]

        const projectItems = projects.map(project => (
            <Fade bottom key={_.kebabCase(project.name)}>
                <ProjectItem
                    name={project.name}
                    desc={project.desc}
                    imageFileName={project.image}
                    skills={project.skills || []}
                    link={project.link || ''}
                    source={project.source || ''}
                />
            </Fade>
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
