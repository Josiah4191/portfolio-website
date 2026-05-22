import './Projects.css';
import {PROJECTS} from "../../data/Project-data.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="grid page-margin">
                <h1 className="h1 projects-title">projects</h1>
                <p className="projects-description">These projects showcase some of the applications, experiments,
                    and ideas I’ve worked on while learning and improving as a developer. I’m always building new
                    things and will continue expanding this portfolio over time.</p>
                <div className="project-cards-list">
                    {PROJECTS.map((project) => <ProjectCard key={project.title} {...project}/>)}
                </div>
            </div>
        </section>
    );
}