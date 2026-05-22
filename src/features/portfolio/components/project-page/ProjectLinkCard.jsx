import './ProjectPage.css';

export default function ProjectLinkCard({url, label}) {
    return (
        <a target={url === 'http://localhost:5173/squirrels' ? "_self" : "_blank"} href={url} className="project-link-card">{label} <span className="project-link-arrow">→</span></a>
    )
}