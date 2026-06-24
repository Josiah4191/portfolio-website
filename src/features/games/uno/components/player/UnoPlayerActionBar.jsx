import UnoPlayerBadge from "./UnoPlayerBadge.jsx";

export default function UnoPlayerActionBar({
                                               localPlayer,
                                               currentPlayerId,
                                               availableActions,
                                               lastAction,
                                               onCallUno,
                                               onPassTurn,
                                               playerRefs,
                                               playerCardRefs,
                                               registerRef
                                           }) {

    function handleCallUno() {
        onCallUno(localPlayer.id);
    }

    const canCallUno = availableActions.canCallUno;
    const canPass = availableActions.canPass;

    const label =
        canCallUno
            ? "UNO"
            : canPass
                ? "PASS"
                : localPlayer.name;

    const onClick =
        canCallUno
            ? handleCallUno
            : canPass
                ? onPassTurn
                : undefined;

    const hasAction = canPass ? "uno-player-badge-has-action" : "";

    const countdown = canCallUno ? "uno-player-badge-has-countdown" : "";

    return (
        <div>
            <UnoPlayerBadge
                key={localPlayer.id}
                playerId={localPlayer.id}
                playerRefs={playerRefs}
                playerCardRefs={playerCardRefs}
                registerRef={registerRef}
                label={label}
                hasAction={hasAction}
                countdown={countdown}
                lastAction={lastAction}
                isCurrentPlayer={localPlayer.id === currentPlayerId}
                handSize={localPlayer.handSize}
                onClick={onClick}/>
        </div>
    )
}