import './UnoPlayerArea.css'
import UnoPlayerHand from "../../player/UnoPlayerHand.jsx";
import UnoPlayerActionBar from "../../player/UnoPlayerActionBar.jsx";
import ActionArea from "./ActionArea.jsx";

export default function UnoPlayerArea({
                                          localPlayer,
                                          availableActions,
                                          lastAction,
                                          currentPlayerId,
                                          pendingCardId,
                                          flyingCard,
                                          playerRefs,
                                          playerCardRefs,
                                          cardRefs,
                                          registerRef,
                                          onCallUno,
                                          onPassTurn,
                                          onPlayCard,
                                      }) {

    return (
        <div className="uno-player-area">
            <UnoPlayerActionBar
                lastAction={lastAction}
                availableActions={availableActions}
                currentPlayerId={currentPlayerId}
                localPlayer={localPlayer}
                playerRefs={playerRefs}
                playerCardRefs={playerCardRefs}
                registerRef={registerRef}
                onCallUno={onCallUno}
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