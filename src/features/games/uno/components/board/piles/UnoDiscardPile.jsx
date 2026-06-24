import './UnoDiscardPile.css'
import UnoDiscardCard from "../../cards/UnoDiscardCard.jsx";

export default function UnoDiscardPile({topCard, currentColor, discardPileRef}) {
    const isWildCard =
        topCard?.value === "WILD" ||
        topCard?.value === "WILD_DRAW_FOUR";

    const displayColor = isWildCard ? currentColor : topCard?.color;

    return (
        <div className="uno-discard-pile">
            <UnoDiscardCard
                card={topCard}
                displayColor={displayColor}
                cardRef={discardPileRef}/>
        </div>
    )
}