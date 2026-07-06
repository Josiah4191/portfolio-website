import './UnoPlayerArea.css'
import UnoPlayerHand from "../../player/UnoPlayerHand.jsx";
import UnoPlayerActionBar from "../../player/UnoPlayerActionBar.jsx";
import UnoPlayerBadge from "../../player/UnoPlayerBadge.jsx";

export default function UnoPlayerArea({
                                          localPlayer,
                                          availableActions,
                                          pendingCardId,
                                          flyingCard,
                                          playerRefs,
                                          playerCardRefs,
                                          cardRefs,
                                          registerRef,
                                          onDrawCard,
                                          onCallUno,
                                          onCallOutUno,
                                          onPassTurn,
                                          onPlayCard,
                                      }) {
    const {canCallUno, canPass, canDraw} = availableActions;
    const hasAction = canPass || canCallUno ? "uno-player-badge-has-action" : "";

    return (
        <div className="uno-player-area">
            <UnoPlayerBadge
                key={localPlayer.id}
                playerId={localPlayer.id}
                playerName={localPlayer.name}
                playerRefs={playerRefs}
                playerCardRefs={playerCardRefs}
                registerRef={registerRef}
                hasAction={hasAction}
                handSize={localPlayer.handSize}/>
            <UnoPlayerActionBar
                localPlayer={localPlayer}
                availableActions={availableActions}
                canCallUno={canCallUno}
                canDraw={canDraw}
                onDrawCard={onDrawCard}
                canPass={canPass}
                onCallUno={onCallUno}
                onCallOutUno={onCallOutUno}
                onPassTurn={onPassTurn}/>
            <UnoPlayerHand
                flyingCard={flyingCard}
                cardRefs={cardRefs}
                registerRef={registerRef}
                localPlayer={localPlayer}
                playableCardIds={availableActions.playableCardIds}
                pendingCardId={pendingCardId}
                onPlayCard={onPlayCard}/>
        </div>
    )

}