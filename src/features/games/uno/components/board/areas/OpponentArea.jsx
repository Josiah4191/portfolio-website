import './OpponentArea.css'
import UnoPlayerBadge from "../../player/UnoPlayerBadge.jsx";

export default function OpponentArea({
                                         opponents,
                                         currentPlayerId,
                                         onCallOutUno,
                                         availableActions,
                                         lastAction,
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
                    const label = canCallOutUno ? "UNO" : opponent.name;
                    const countdown = canCallOutUno ? "uno-player-badge-has-countdown" : "";
                    const onClick = canCallOutUno ? () => onCallOutUno(opponent.id) : undefined;

                    return <UnoPlayerBadge
                        key={opponent.id}
                        playerId={opponent.id}
                        playerRefs={playerRefs}
                        playerCardRefs={playerCardRefs}
                        registerRef={registerRef}
                        handSize={opponent.handSize}
                        label={label}
                        countdown={countdown}
                        lastAction={lastAction}
                        isCurrentPlayer={opponent.id === currentPlayerId}
                        onClick={onClick}
                    />
                })}
            </div>
        </div>
    )
}