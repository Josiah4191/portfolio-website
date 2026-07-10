import './ProjectHeroIntro.css'
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import ProjectTechnologies from "./ProjectTechnologies.jsx";

export default function ProjectHeroIntro({title, titleId, description, badges}) {
    return (
        <header className="project-hero-intro">
            <Link to="/#projects" className="project-hero-back-link">
                <ArrowLeft className="project-hero-back-icon" aria-hidden="true"/>
                <span className="text-link project-hero-back-link-label">Back to Projects</span>
            </Link>

            <div className="project-hero-heading">
                <h1 id={titleId} className="text-page-title">{title}</h1>
            </div>

            <div className="text-section-body project-hero-description">
                {description.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>

            <ProjectTechnologies badges={badges}/>

        </header>
    )
}