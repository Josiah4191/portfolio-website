import './ProjectHero.css'
import ProjectHeroIntro from "./ProjectHeroIntro.jsx";
import ProjectQuickLinks from "./bottom-area/ProjectQuickLinks.jsx";
import ProjectTechnologies from "./bottom-area/ProjectTechnologies.jsx";

export default function ProjectHero({title, description, badges, links, projectType}) {
    return (
        <section className="project-hero-section" aria-labelledby="project-hero-title">
            <div className="grid page-margin">

                <div className="project-hero-left-side">
                    <ProjectHeroIntro titleId="project-hero-title" title={title} description={description} projectType={projectType}/>
                </div>

                <div className="project-hero-right-side">
                    <ProjectQuickLinks links={links}/>
                    <ProjectTechnologies badges={badges}/>
                </div>

            </div>
        </section>
    )
}