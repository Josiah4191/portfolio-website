import './ProjectScreenshotSlide.css'
import ProjectScreenshotCard from "./ProjectScreenshotCard.jsx";

export default function ProjectScreenshotSlide({screenshot, currentIndex, totalScreenshots}) {
    const Icon = screenshot.icon;
    return (
        <article className="project-screenshot-slide">
            <ProjectScreenshotCard screenshot={screenshot} />

            <div className="project-screenshot-details">
                <div className="project-screenshot-icon-wrapper">
                    <Icon className="project-screenshot-icon" aria-hidden="true" />
                </div>

                <div className="project-screenshot-text">
                    <h3 className="type-card-title project-screenshot-title">
                        {screenshot.title}
                    </h3>

                    <p className="type-section-text project-screenshot-description">
                        {screenshot.description}
                    </p>
                </div>

                <span className="type-label project-screenshot-counter" aria-label={`Screenshot ${currentIndex} of ${totalScreenshots}`}>
                    {`${currentIndex} / ${totalScreenshots}`}
                </span>
            </div>

            

        </article>
    )
}