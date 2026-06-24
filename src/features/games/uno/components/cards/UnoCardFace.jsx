import './UnoCardFace.css'

const CARD_VALUE_LABELS = {
    ZERO: "0",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    SKIP: "⊘",
    REVERSE: "↺",
    DRAW_TWO: "+2",
    WILD: "W",
    WILD_DRAW_FOUR: "+4",
};

export default function UnoCardFace({card, displayColor = card.color}) {
    const cardValueLabel = CARD_VALUE_LABELS[card.value] ?? card.value;
    const cardColorClass = displayColor.toLowerCase();

    return (
        <div
            aria-label={`${displayColor} ${card.value}`}
            className={`uno-card-face ${cardColorClass}`}
        >
            <span className="uno-card-top-value" aria-hidden="true">{cardValueLabel}</span>
            <span className="uno-card-bottom-value" aria-hidden="true">{cardValueLabel}</span>
            <span className="uno-card-center-value" aria-hidden="true">{cardValueLabel}</span>
        </div>
    )
}