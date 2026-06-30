import './Projects.css';
import {PROJECTS} from "../../data/projectData.js";
import ProjectCard from "./ProjectCard.jsx";
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";
import SectionHeader from "../project-page/SectionHeader.jsx";

export default function Projects() {
    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="grid page-margin">

                <div className="projects-section-header">
                    <SectionHeader
                        eyebrow="PROJECTS"
                        title="Projects"
                        titleId="projects-title"
                        description="A selection of projects I've built to explore full-stack development, interactive gameplay, and clean UI design."/>
                </div>

                <div className="projects-section-carousel">
                    <SlidingCarousel
                        ariaLabel="Projects"
                        trackClass="projects-section-track">
                        {PROJECTS.map((project) => <ProjectCard key={project.slug} project={project}/>)}
                    </SlidingCarousel>
                </div>

            </div>
        </section>
    );
}