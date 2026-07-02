import './UnoCard.css'
import CardValue from "./CardValue.jsx";

export default function UnoCard({card, displayColor = card.color}) {
    const cardValue = card?.value;
    const cardColorClass = displayColor.toLowerCase();

    return (
        <article className="uno-card">
            <div aria-label={`${displayColor} ${cardValue}`} className={`uno-card-face ${cardColorClass}`}>
                <CardValue value={cardValue} className="uno-card-top-value"/>
                <CardValue color={cardColorClass} value={cardValue} className="uno-card-center-value"/>
                <CardValue value={cardValue} className="uno-card-bottom-value"/>
            </div>
        </article>
    )
}