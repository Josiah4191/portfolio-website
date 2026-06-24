import './Projects.css';
import {PROJECTS} from "../../data/projectData.js";
import ProjectCard from "./ProjectCard.jsx";
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="grid page-margin">
                <h2 className="section-title section-content">Projects</h2>
                {/*<p className="section-content">These projects showcase some of the applications, experiments,
                    and ideas I’ve worked on while learning and improving as a developer. I’m always building new
                    things and will continue expanding this portfolio over time.</p>*/}
                <SlidingCarousel
                    variant="carousel-card"
                    ariaLabel="Projects"
                    className="section-content">
                    {PROJECTS.map((project) => <ProjectCard {...project}/>)}
                </SlidingCarousel>

            </div>
        </section>
    );
}