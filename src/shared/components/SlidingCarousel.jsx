import './SlidingCarousel.css'
import {Children, useEffect, useRef, useState} from "react";
import {ChevronRight} from "lucide-react";

export default function SlidingCarousel({children, ariaLabel, trackClass = ""}) {
    const slides = Children.toArray(children);
    const trackRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    function scrollByAmount(direction) {
        const track = trackRef.current;

        if (!track) return;

        const scrollAmount = track.clientWidth * 0.8;

        track.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth"});
    }

    function updateButtonState() {
        const track = trackRef.current;

        if (!track) return;

        setIsAtStart(track.scrollLeft <= 0);
        setIsAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    }

    function handleWheel(event) {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        const scrollAmount = Math.round(event.deltaY);

        event.preventDefault();

        track.scrollLeft += scrollAmount;
    }

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        track.addEventListener("wheel", handleWheel, {passive: false});

        return () => {
            track.removeEventListener("wheel", handleWheel);
        }
    }, []);

    return (
        <section aria-label={ariaLabel}>
            <div className="sliding-carousel">
                <button
                    type="button"
                    disabled={isAtStart}
                    onClick={() => scrollByAmount(-1)}
                    className="sliding-carousel-button sliding-carousel-button-left">
                    <ChevronRight className="sliding-carousel-icon sliding-carousel-icon-left"/>
                </button>

                <div className="sliding-carousel-viewport">
                    <ul
                        ref={trackRef}
                        onScroll={updateButtonState}
                        className={`sliding-carousel-track ${trackClass}`}>
                        {slides.map((slide, index) => (
                            <li key={index} className="sliding-carousel-slide">
                                {slide}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    disabled={isAtEnd}
                    onClick={() => scrollByAmount(1)}
                    className="sliding-carousel-button sliding-carousel-button-right">
                    <ChevronRight className="sliding-carousel-icon"/>
                </button>
            </div>
        </section>
    )
}