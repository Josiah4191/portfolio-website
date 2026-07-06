import {ChevronRight} from "lucide-react";

export default function PortfolioCarouselButton({direction, disabled, onClick}) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`portfolio-carousel-button portfolio-carousel-button-${direction}`}
            aria-label={direction === "left" ? "Scroll left" : "Scroll right"}>
            <ChevronRight className={direction === "left" ? "icon-left" : ""} />
        </button>
    )
}