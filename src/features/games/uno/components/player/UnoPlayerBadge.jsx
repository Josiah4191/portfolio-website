import './UnoPlayerBadge.css'
import {buildPlayerActionMessage} from "../../utils/refUtils.js";
import {useEffect, useState} from "react";

export default function UnoPlayerBadge({
                                           playerId,
                                           handSize,
                                           label,
                                           hasAction,
                                           countdown,
                                           lastAction,
                                           onClick,
                                           playerRefs,
                                           playerCardRefs,
                                           registerRef
                                       }) {

    const MAX_VISIBLE_CARDS = 5;
    const showCardNumbers = handSize > MAX_VISIBLE_CARDS;
    const visibleCardCount = Math.min(handSize, MAX_VISIBLE_CARDS);
    const [playerActionText, setPlayerActionText] = useState(null);
    const isClickable = Boolean(onClick);

    useEffect(() => {
        const playerAction = buildPlayerActionMessage(lastAction);

        if (!playerAction?.message) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPlayerActionText(null);
            return;
        }

        setPlayerActionText(playerAction);

        const timeout = setTimeout(() => {
            setPlayerActionText(null);
        }, 2200);

        return () => clearTimeout(timeout);
    }, [lastAction]);

    return (
        <div
            className={"uno-player-badge"}
            ref={(element) => registerRef?.(playerRefs, playerId, element)}>
            <button
                type="button"
                onClick={onClick}
                disabled={!isClickable}
                className={`uno-player-label ${hasAction} ${countdown}`}>
                <span className="uno-player-label-text">{label}</span>
            </button>
            <div className="uno-player-card-count">
                {Array.from({length: visibleCardCount}).map((_, index) => {
                    const isLastVisibleCard = index === visibleCardCount - 1;
                    return (
                        <div
                            key={index}
                            className="uno-player-card-count-card"
                            ref={
                                isLastVisibleCard && playerCardRefs && registerRef
                                    ? (element) => registerRef?.(playerCardRefs, playerId, element)
                                    : undefined
                            }/>
                    );
                })}
                {showCardNumbers && <p className="uno-player-card-count-label">
                    {handSize}

                </p>}
            </div>
            {playerActionText?.playerId === playerId && (
                <p className="uno-player-action-text">
                    {playerActionText.message}
                </p>
            )}
        </div>
    )
}