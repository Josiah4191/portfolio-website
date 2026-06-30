import './ProjectScreenshotCarousel.css'
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import ProjectScreenshotSlide from "./ProjectScreenshotSlide.jsx";

export default function ProjectScreenshotCarousel({screenshots, ariaLabel, className = ""}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = screenshots.length - 1;
    const currentScreenshot = screenshots[currentIndex];
    const totalScreenshots = screenshots.length;

    function showPrevious() {
        setCurrentIndex(
            currentIndex === 0
                ? lastIndex
                : currentIndex - 1
        );
    }

    function showNext() {
        setCurrentIndex(
            currentIndex === lastIndex
                ? 0
                : currentIndex + 1
        );
    }

    return (
        <div className="project-screenshot-carousel">
                <button
                    type="button"
                    aria-label="Show previous screenshot"
                    onClick={showPrevious}
                    className="project-screenshot-carousel-button project-screenshot-carousel-previous-button">
                    <ChevronLeft className="project-screenshot-carousel-icon" aria-hidden="true"/>
                </button>

                <ProjectScreenshotSlide
                    screenshot={currentScreenshot}
                    currentIndex={currentIndex + 1}
                    totalScreenshots={totalScreenshots}/>

                <button
                    type="button"
                    aria-label="Show next screenshot"
                    onClick={showNext}
                    className="project-screenshot-carousel-button project-screenshot-carousel-next-button">
                    <ChevronRight className="project-screenshot-carousel-icon" aria-hidden="true"/>
                </button>

            <nav className="project-screenshot-carousel-dots" aria-label="Screenshot navigation">
                {screenshots.map((_, index) => (
                    <button
                        type="button"
                        aria-label={`Show screenshot ${index + 1} of ${totalScreenshots}`}
                        aria-current={index === currentIndex ? "true" : undefined}
                        className={`project-screenshot-carousel-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        key={index}/>
                ))}
            </nav>
        </div>
    )
}