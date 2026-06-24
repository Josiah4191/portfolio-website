import './UnoPlayerHand.css'
import UnoHandCard from "../cards/UnoHandCard.jsx";
import {sortCards} from "../../utils/refUtils.js";
import {useEffect, useState} from "react";

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

    const CARDS_PER_PAGE = 14;
    const [activePage, setActivePage] = useState(0);

    const totalPages = Math.ceil(sortedHand.length / CARDS_PER_PAGE);

    const startIndex = activePage * CARDS_PER_PAGE;

    const visibleCards = sortedHand.slice(
        startIndex,
        startIndex + CARDS_PER_PAGE
    );

    useEffect(() => {
        function handleWheel(event) {
            if (event.deltaY > 0) {
                setActivePage(page => Math.min(totalPages - 1, page + 1));
            } else {
                setActivePage(page => Math.max(0, page - 1));
            }
        }

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        }
    }, [totalPages]);

    useEffect(() => {
        if (activePage > totalPages - 1) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActivePage(Math.max(0, totalPages - 1));
        }
    }, [activePage, totalPages]);

    function prevPage() {
        setActivePage(page => Math.max(0, page - 1));
    }

    function nextPage() {
        setActivePage(page => Math.min(totalPages - 1, page + 1));
    }

    return (
        <div className="uno-player-container">
            {totalPages > 1 && (
                <div className="uno-hand-page-dots">
                    <button
                        type="button"
                        className="hand-page-arrow"
                        aria-label="Previous hand page"
                        onClick={prevPage}
                        disabled={activePage === 0}>
                        ⌃
                    </button>
                    {Array.from({length: totalPages}).map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            aria-label={`Go to hand page ${index + 1}`}
                            aria-current={index === activePage ? "page" : undefined}
                            className={`uno-hand-page-dot ${index === activePage ? "active" : ""}`}
                            onClick={() => setActivePage(index)}
                        />
                    ))}
                    <button
                        type="button"
                        className="uno-hand-page-arrow"
                        aria-label="Next hand page"
                        onClick={nextPage}
                        disabled={activePage === totalPages - 1}>
                        ⌄
                    </button>
                </div>
            )}

            <ul
                className="uno-player-hand">
                {visibleCards.map((card) => {
                    const isPlayable = playableCardIds.includes(card.cardId);
                    const isBeingCloned = flyingCard?.card?.cardId === card.cardId;

                    function handlePlayCard() {
                        onPlayCard(card.cardId, card);
                    }

                    return (
                        <li key={card.cardId}>
                            <UnoHandCard
                                card={card}
                                cardRefs={cardRefs}
                                registerRef={registerRef}
                                isBeingCloned={isBeingCloned}
                                pendingCardId={pendingCardId}
                                isPlayable={isPlayable}
                                onPlayCard={handlePlayCard}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}