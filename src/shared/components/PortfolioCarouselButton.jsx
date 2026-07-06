import './PortfolioCarouselButton.css';
import {ChevronRight} from "lucide-react";

export default function PortfolioCarouselButton({direction, onClick, ...props}) {
    return (
        <button
            type="button"
            onClick={onClick}
            {...props}
            className={`portfolio-carousel-button portfolio-carousel-button-${direction}`}
            aria-label={direction === "left" ? "Scroll left" : "Scroll right"}>
            <ChevronRight className={direction === "left" ? "icon-left" : ""} />
        </button>
    )
}