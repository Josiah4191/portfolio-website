import './Projects.css';
import {PROJECTS} from "../../data/projectData.js";
import ProjectCard from "./ProjectCard.jsx";
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";
import SectionHeader from "../project-page/SectionHeader.jsx";
import PortfolioCarouselButton from "../../../../shared/components/PortfolioCarouselButton.jsx";

export default function Projects() {
    return (
        <section id="projects" className="section project-section" aria-labelledby="projects-title">
            <div className="grid page-margin">

                <div className="projects-section-header">
                    <SectionHeader
                        eyebrow="PROJECTS"
                        title="Projects"
                        titleId="projects-title"
                        variant="dark"
                        description="Here are some of the projects I've built."/>
                </div>

                <div className="projects-section-carousel">
                    <SlidingCarousel
                        ariaLabel="Projects"
                        ButtonComponent={PortfolioCarouselButton}
                        trackClass="projects-section-track">
                        {PROJECTS.map((project) => <ProjectCard key={project.slug} project={project}/>)}
                    </SlidingCarousel>
                </div>

            </div>
        </section>
    );
}