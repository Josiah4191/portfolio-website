
export default function ProjectScreenshotCard({id, image, alt, onClick}) {
    return (
        <div className="project-screenshot-card card-interactive" onClick={onClick}>
            <img src={image} alt={alt}/>
        </div>
    )
}