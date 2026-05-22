import './ProjectPage.css';

export default function ProjectLinkCard({url, label}) {
    return (
        <a target={"_blank"} href={url} className="project-link-card">{label} <span className="project-link-arrow">→</span></a>
    )
}