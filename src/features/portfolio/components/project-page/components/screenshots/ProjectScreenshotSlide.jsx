import './ProjectScreenshotSlide.css'
import ProjectScreenshotCard from "./ProjectScreenshotCard.jsx";

export default function ProjectScreenshotSlide({screenshot, currentIndex, totalScreenshots}) {
    return (
        <article className="project-screenshot-slide">
            <ProjectScreenshotCard screenshot={screenshot} />

            <div className="project-screenshot-details">
                <div className="project-screenshot-text">
                    <h3 className="text-card-title project-screenshot-title">
                        {screenshot.title}
                    </h3>

                    <p className="text-section-body project-screenshot-description">
                        {screenshot.description}
                    </p>
                </div>

                <span className="project-screenshot-counter" aria-label={`Screenshot ${currentIndex} of ${totalScreenshots}`}>
                    {`${currentIndex} / ${totalScreenshots}`}
                </span>
            </div>

            

        </article>
    )
}