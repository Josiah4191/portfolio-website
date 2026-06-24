import './ProjectCard.css'
import {Link} from "react-router-dom";

export default function ProjectCard({title, summary, badges, route}) {
    return (
        <Link className="project-card card-interactive" to={route}>
            <div className="project-card-top">
                <h3 className="project-card-title">{title}</h3>
            </div>
            <p className="project-card-description">{summary}</p>
            <div className="project-card-badges">
                {badges.map((badge) => <img className="project-card-badge-icon" key={badge.id} src={badge.image} alt={badge.label}/>)}
            </div>
        </Link>
    )
}