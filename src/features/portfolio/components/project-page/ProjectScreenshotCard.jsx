import './ProjectScreenshotCard.css'

export default function ProjectScreenshotCard({image, alt}) {
    return (
        <article
            type="button"
            className="project-screenshot-card">
            <img src={image} alt={alt}/>
        </article>
    )
}