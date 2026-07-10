import './PortfolioCarouselButton.css';
import {ChevronRight} from "lucide-react";

export default function PortfolioCarouselButton({direction, variant = "light", onClick, ...props}) {
    return (
        <button
            type="button"
            onClick={onClick}
            {...props}
            className={`portfolio-carousel-button portfolio-carousel-button-${direction} portfolio-carousel-${variant}`}
            aria-label={direction === "left" ? "Scroll left" : "Scroll right"}>
            <ChevronRight size={32} strokeWidth={1.8} className={`${direction === "left" ? "icon-left" : ""}`} />
        </button>
    )
}