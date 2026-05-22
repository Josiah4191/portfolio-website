import {useNavigate} from "react-router-dom";

export default function ProjectCard({title, summary, badges, route}) {
    const navigate = useNavigate();
    return (
        <div className="project-card card-interactive" onClick={() => navigate(route)}>
            <div className="project-card-top">
                <div className="badges">
                    {badges.map((badge) => <img className="badge-icon" key={badge.id} src={badge.image} alt={badge.label}/>)}
                </div>
                <p className="project-card-title">{title}</p>
            </div>
            <p className="project-card-description">{summary}</p>
        </div>
    )
}