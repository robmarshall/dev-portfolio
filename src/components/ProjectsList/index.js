import React from "react";
import ProjectItem from "../ProjectItem";
import "./projectlist.scss";

class ProjectList extends React.Component {
  render() {
    const projects = [
      {
        name: "Run Leeds",
        desc:
          "Gatsby frontend with a WordPress CMS. A community project to help keep runners running when faced with lifes problems.",
        image: "runleeds.jpg",
        skills: [
          "html5",
          "sass",
          "gatsby",
          "react",
          "wordpress",
          "restapi",
          "node",
          "npm",
          "netlify",
          "graphql",
          "es6"
        ],
        link: "https://www.runleeds.co.uk/"
      },
      {
        name: "Thoughts and Stuff Blog",
        desc:
          "A blog covering modern web development technologies and processes. Built with Gatsby and WordPress.",
        image: "tns-project.jpg",
        skills: [
          "html5",
          "sass",
          "gatsby",
          "react",
          "node",
          "wordpress",
          "netlify",
          "graphql",
          "es6"
        ],
        link: "http://thoughtsandstuff.com",
        source: "https://github.com/robmarshall/gatsby-tns"
      },
      {
        name: "Developer Portfolio",
        desc:
          "This site! A Gatsby driven SPA that uses leading technologies to create a super fast, 100% lighthouse audit passing portfolio website. Hosted on Github pages.",
        image: "portfolio.jpg",
        skills: [
          "html5",
          "sass",
          "gatsby",
          "github",
          "netlify",
          "graphql",
          "es6"
        ],
        source: "https://github.com/robmarshall/dev-portfolio"
      }
    ];

    const projectItems = projects.map(project => (
      <ProjectItem
        name={project.name}
        desc={project.desc}
        imageFileName={project.image}
        skills={project.skills || []}
        link={project.link || ""}
        source={project.source || ""}
      />
    ));

    return (
      <div className="projects-list">
        <div className="tight-container">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-list__wrap">{projectItems}</div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
