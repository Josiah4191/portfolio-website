import './ProjectScreenshotCard.css'

export default function ProjectScreenshotCard({screenshot}) {
    const {image, alt} = screenshot;

    return (
        <figure
            className="project-screenshot-card">
            <img src={image} alt={alt}/>
        </figure>
    )
}