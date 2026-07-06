import './OpponentArea.css'
import UnoPlayerBadge from "../../player/UnoPlayerBadge.jsx";

export default function OpponentArea({
                                         opponents,
                                         availableActions,
                                         playerRefs,
                                         playerCardRefs,
                                         registerRef
                                     }) {
    const callOutUnoPlayerIds = availableActions?.callOutUnoPlayerIds ?? [];

    return (
        <div className="opponent-area-wrapper">
            <div className="opponent-area">
                {opponents.map((opponent) => {
                    const canCallOutUno = callOutUnoPlayerIds.includes(opponent.id);
                    const hasAction = canCallOutUno ? "uno-player-badge-has-action" : "";

                    return <UnoPlayerBadge
                        key={opponent.id}
                        playerId={opponent.id}
                        playerName={opponent.name}
                        playerRefs={playerRefs}
                        playerCardRefs={playerCardRefs}
                        registerRef={registerRef}
                        handSize={opponent.handSize}
                        hasAction={hasAction}/>
                })}
            </div>
        </div>
    )
}