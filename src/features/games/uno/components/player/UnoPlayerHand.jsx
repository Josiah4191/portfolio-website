import './UnoPlayerHand.css'
import UnoHandCard from "../cards/UnoHandCard.jsx";
import {sortCards} from "../../utils/utils.js";
import SlidingCarousel from "../../../../../shared/components/SlidingCarousel.jsx";

export default function UnoPlayerHand({
                                          localPlayer,
                                          playableCardIds,
                                          pendingCardId,
                                          flyingCard,
                                          cardRefs,
                                          registerRef,
                                          onPlayCard,
                                      }) {
    const sortedHand = sortCards(localPlayer.hand);

    return (
        <SlidingCarousel
            ariaLabel="Player Cards"
            showButtons={false}
            className="uno-player-hand-carousel"
            trackClass="uno-player-hand-track">
            {sortedHand.map((card) => {
                const isPlayable = playableCardIds.includes(card.cardId);
                const isBeingCloned = flyingCard?.card?.cardId === card.cardId;

                function handlePlayCard() {
                    onPlayCard(card.cardId, card);
                }

                return (
                        <UnoHandCard
                            key={card.cardId}
                            card={card}
                            cardRefs={cardRefs}
                            registerRef={registerRef}
                            isBeingCloned={isBeingCloned}
                            pendingCardId={pendingCardId}
                            isPlayable={isPlayable}
                            onPlayCard={handlePlayCard}/>
                )
            })}
        </SlidingCarousel>
    )
}
