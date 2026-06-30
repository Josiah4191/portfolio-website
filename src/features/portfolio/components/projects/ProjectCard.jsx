import './ProjectCard.css'
import {Link} from "react-router-dom";

export default function ProjectCard({project}) {
    const {title, summary, badges, route, preview, projectType} = project;

    return (
        <Link className="project-card" to={route}>

            <div className="project-card-top">
                <img className="project-card-image" src={preview.image} alt={preview.alt}/>
            </div>

            <div className="project-card-body">
                <span className="type-label project-card-type">{projectType}</span>

                <h3 className="type-card-title">{title}</h3>

                <p className="type-card-body">{summary}</p>
            </div>

            <div className="project-card-badges">
                {badges.map((badge) => <img className="project-card-badge-icon" key={badge.id} src={badge.image}
                                            alt={badge.label}/>)}
            </div>

        </Link>
    )
}