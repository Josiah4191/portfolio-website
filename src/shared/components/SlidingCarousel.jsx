import './SlidingCarousel.css'
import {Children, useEffect, useRef, useState} from "react";

export default function SlidingCarousel({
                                            children,
                                            ariaLabel,
                                            className,
                                            showButtons = true,
                                            ButtonComponent,
                                            trackClass = ""}) {
    const Button = ButtonComponent;
    const slides = Children.toArray(children);
    const trackRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    function scrollByAmount(direction) {
        const track = trackRef.current;

        if (!track) return;

        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        const scrollAmount = track.clientWidth * 0.75;

        const nextScrollLeft = Math.max(0, Math.min(track.scrollLeft + direction * scrollAmount, maxScrollLeft));

        track.scrollTo({
            left: nextScrollLeft,
            behavior: "smooth"
        });
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
        <section aria-label={ariaLabel} className={`${className}`}>
            <div className="sliding-carousel">
                {showButtons && ButtonComponent &&
                    <Button
                        direction="left"
                        disabled={isAtStart}
                        onClick={() => scrollByAmount(-1)}/>}

                <div
                    ref={trackRef}
                    onScroll={updateButtonState}
                    className="sliding-carousel-viewport">
                    <ul
                        className={`sliding-carousel-track ${trackClass}`}>
                        {slides.map((slide, index) => (
                            <li key={index} className="sliding-carousel-slide">
                                {slide}
                            </li>
                        ))}
                    </ul>
                </div>

                {showButtons && ButtonComponent &&
                    <Button
                        direction="right"
                        disabled={isAtEnd}
                        onClick={() => scrollByAmount(1)}/>}
            </div>
        </section>
    )
}