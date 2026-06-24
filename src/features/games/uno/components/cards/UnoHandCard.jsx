import './UnoHandCard.css'
import UnoCardFace from "./UnoCardFace.jsx";

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
            className={`uno-hand-card ${isBeingCloned ? "uno-hand-card-is-hidden" : ""} ${isPending ? "uno-hand-card-is-pending" : ""}`}>
            <UnoCardFace card={card}/>
        </button>
    )
}