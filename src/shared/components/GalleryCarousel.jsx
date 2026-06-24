import './GalleryCarousel.css'
import {Children, useState} from "react";
import CaretRightIcon from "../icons/CaretRightIcon.jsx";

export default function GalleryCarousel({children, className, ariaLabel}) {

    const slides = Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(null);
    const selectedIndex = nextIndex ?? currentIndex;

    const isTransitioning = nextIndex !== null;

    function goToSlide(index) {
        if (index === currentIndex || isTransitioning) return;

        setNextIndex(index);
    }

    function showPrevious() {
        const previousIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

        goToSlide(previousIndex);
    }

    function showNext() {
        const newNextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

        goToSlide(newNextIndex);
    }

    function finishTransition() {
        if (nextIndex === null) return;

        setCurrentIndex(nextIndex);
        setNextIndex(null);
    }

    return (
        <section className={`${className}`} aria-label={ariaLabel}>
            <div className="gallery-carousel">
                <button
                    type="button"
                    onClick={showPrevious}
                    className="gallery-carousel-button gallery-carousel-previous-button">
                    <CaretRightIcon className="gallery-carousel-icon gallery-carousel-icon-left"/>
                </button>

                <button
                    type="button"
                    onClick={showNext}
                    className="gallery-carousel-button gallery-carousel-next-button">
                    <CaretRightIcon className="gallery-carousel-icon"/>
                </button>

                <ul className="gallery-carousel-list">
                    <li className={`gallery-carousel-slide ${isTransitioning ? "is-exiting" : ""}`}>
                        {slides[currentIndex]}
                    </li>

                    {isTransitioning && (
                        <li
                            className="gallery-carousel-slide is-entering"
                            onAnimationEnd={finishTransition}>
                            {slides[nextIndex]}
                        </li>
                    )}

                </ul>

                <div className="gallery-carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            type="button"
                            aria-label={`Go to screenshot ${index + 1}`}
                            aria-current={index === selectedIndex ? "true" : undefined}
                            className={`gallery-carousel-dot ${index === selectedIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                            key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}