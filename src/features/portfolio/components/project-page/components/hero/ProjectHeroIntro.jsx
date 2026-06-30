import './ProjectHeroIntro.css'
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

export default function ProjectHeroIntro({title, titleId, description, projectType}) {
    return (
        <header className="project-hero-intro">
            <Link to="/#projects" className="project-hero-back-link">
                <ArrowLeft className="project-hero-back-icon" aria-hidden="true"/>
                <span className="type-back-link project-hero-back-link-text">Back to Projects</span>
            </Link>

            <div className="project-hero-heading">
                <h1 id={titleId} className="type-section-page-title">{title}</h1>
                <span className="type-badge project-hero-type">{projectType}</span>
            </div>

            <div className="type-section-text project-hero-description">
                {description.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </header>
    )
}