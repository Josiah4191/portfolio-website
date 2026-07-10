import './ProjectCard.css'
import {Link} from "react-router-dom";

export default function ProjectCard({project}) {
    const {title, summary, badges, route, preview, projectType} = project;

    return (
        <Link className="project-card" to={route}>

            <div className="project-card-image-wrapper">
                <img className="project-card-image" src={preview.image} alt={preview.alt}/>
            </div>

            <div className="project-card-text-wrapper">
                <div className="project-card-text">
                    <h3 className="text-card-title">{title}</h3>
                    <p className="text-card-body project-card-summary">{summary}</p>
                </div>

                <span className="text-label project-card-type">{projectType}</span>
            </div>

            <div className="project-card-badges">
                {badges.map((badge) => <img className="project-card-badge-icon" key={badge.id} src={badge.image}
                                            alt={badge.label}/>)}
            </div>

        </Link>
    )
}