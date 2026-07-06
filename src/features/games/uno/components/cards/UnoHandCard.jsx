import './UnoHandCard.css'
import UnoCard from "./UnoCard.jsx";

export default function UnoHandCard({
                                        card,
                                        cardRefs,
                                        registerRef,
                                        pendingCardId,
                                        isBeingCloned,
                                        isPlayable,
                                        onPlayCard,
                                    }) {
    const isPending = pendingCardId === card.cardId;

    return (
        <button
            type="button"
            ref={(element) => registerRef?.(cardRefs, card.cardId, element)}
            onClick={onPlayCard}
            disabled={!isPlayable}
            className={`uno-hand-card 
            ${isPlayable ? "uno-hand-card-is-playable" : ""}
            ${isBeingCloned ? "uno-hand-card-is-hidden" : ""} 
            ${isPending ? "uno-hand-card-is-pending" : ""}`}>
            <UnoCard card={card}/>
        </button>
    )
}