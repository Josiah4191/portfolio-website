import './UnoPlayerBadge.css'
import {User} from "lucide-react";
import Panel from "../shared/Panel.jsx";

export default function UnoPlayerBadge({
                                           playerId,
                                           playerName,
                                           handSize,
                                           hasAction,
                                           playerRefs,
                                           playerCardRefs,
                                           registerRef,
                                       }) {
    const MAX_VISIBLE_CARDS = 7;
    const visibleCardCount = Math.min(handSize, MAX_VISIBLE_CARDS);

    return (
        <Panel
            className={"uno-player-badge"}>
            <div
                aria-label={`${playerName}. ${handSize} cards in hand.`}
                className={`uno-player-label ${hasAction}`}>
                <User className="uno-player-label-icon"/>
                <span className="uno-player-label-text">{playerName}</span>
                <span
                    ref={(element) => registerRef?.(playerRefs, playerId, element)}
                    className="uno-player-turn-indicator"/>
            </div>
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
                <p className="uno-player-card-count-label">{handSize}</p>
            </div>
        </Panel>
    )
}