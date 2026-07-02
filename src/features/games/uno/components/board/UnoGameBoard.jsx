import CenterArea from "./areas/CenterArea.jsx";
import OpponentArea from "./areas/OpponentArea.jsx";
import './UnoGameBoard.css'
import UnoPlayerArea from "./areas/UnoPlayerArea.jsx";
import {useEffect, useRef, useState} from "react";
import UnoFlyingCard from "../animations/UnoFlyingCard.jsx";
import WildColorModal from "../controls/WildColorModal.jsx";
import {registerRef} from "../../utils/refUtils.js";
import CurrentPlayerDot from "./indicators/CurrentPlayerDot.jsx";
import FullToMiniFlyingCard from "../animations/FullToMiniFlyingCard.jsx";
import MiniToFullFlyingCard from "../animations/MiniToFullFlyingCard.jsx";

export default function UnoGameBoard({
                                         gameState,
                                         lastAction,
                                         flyingCard,
                                         setFlyingCard,
                                         onPlayCard,
                                         onDrawCard,
                                         onPassTurn,
                                         onChooseWildColor,
                                         onCallUno,
                                         onCallOutUno,
                                         onFlyingAnimationComplete,
                                     }) {

    const discardPileRef = useRef(null);
    const drawPileRef = useRef(null);
    const cardRefs = useRef({});
    const playerRefs = useRef({});
    const playerCardRefs = useRef({});
    const [pendingCardRect, setPendingCardRect] = useState({})
    const isWildColorAnimating = flyingCard?.card?.cardId === gameState.pendingCardId;
    const shouldShowWildColorModal = gameState.pendingAction === "CHOOSE_WILD_COLOR" && !isWildColorAnimating;

    useEffect(() => {
        const pendingCardElement = cardRefs.current[gameState.pendingCardId];
        const cardRect = pendingCardElement?.getBoundingClientRect();

        if (shouldShowWildColorModal) {
            setPendingCardRect(cardRect);
        }

    }, [gameState.pendingAction, gameState.pendingCardId, shouldShowWildColorModal])

    useEffect(() => {
        if (!lastAction) {
            return;
        }

        if (gameState.currentPlayerId === gameState.localPlayer.id) {
            return;
        }

        if (lastAction.type === "CARD_PLAYED") {
            const playerId = lastAction.sourcePlayerId;
            const playerCardElement = playerCardRefs.current[playerId];

            if (!playerCardElement) {
                return;
            }

            const playerCardRect = playerCardElement.getBoundingClientRect();

            const card = lastAction.playedCard
            const discardElement = discardPileRef.current;

            const discardRect = discardElement.getBoundingClientRect();
            setFlyingCard({
                type: "MINI_TO_FULL",
                card,
                sourceRect: playerCardRect,
                targetRect: discardRect,
                cardWidth: discardRect.width,
                cardHeight: discardRect.height,
                shouldFlip: false,
                startsFaceDown: false
            });

        }

        if (lastAction.type === "CARD_DRAWN") {
            const playerId = lastAction.playerId;
            const playerCardElement = playerCardRefs.current[playerId];

            if (!playerCardElement) {
                return;
            }

            const playerCardRect = playerCardElement.getBoundingClientRect();

            const drawPileElement = drawPileRef.current;
            const drawPileRect = drawPileElement.getBoundingClientRect();
            setFlyingCard({
                type: "FULL_TO_MINI",
                card: null,
                sourceRect: drawPileRect,
                targetRect: playerCardRect,
                shouldFlip: false,
                startsFaceDown: true
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastAction, setFlyingCard])

    function handleChooseWildColor(color) {
        const pendingCardId = gameState.pendingCardId;
        const card = gameState.localPlayer.hand.find(card => card.cardId === pendingCardId);
        const cardRef = cardRefs.current[pendingCardId];
        const discardRef = discardPileRef.current;

        const cardRect = cardRef.getBoundingClientRect();
        const discardRect = discardRef.getBoundingClientRect();

        onChooseWildColor(color);

        setFlyingCard({
            type: "FULL_TO_FULL",
            card,
            sourceRect: cardRect,
            targetRect: discardRect,
            shouldFlip: false,
            startsFaceDown: false
        });
    }

    async function handleDrawCard() {
        const playerCardElement = playerCardRefs.current[gameState.localPlayer.id];

        await onDrawCard();

        const drawPileElement = drawPileRef.current;

        const playerCardRect = playerCardElement.getBoundingClientRect();
        const drawPileRect = drawPileElement.getBoundingClientRect();

        setFlyingCard({
            type: "FULL_TO_MINI",
            card: null,
            sourceRect: drawPileRect,
            targetRect: playerCardRect,
            shouldFlip: false,
            startsFaceDown: true
        });

    }

    async function handlePlayCard(cardId, card) {
        const discardRef = discardPileRef.current;
        const cardRef = cardRefs.current[cardId];

        const cardRect = cardRef.getBoundingClientRect();
        const discardRect = discardRef.getBoundingClientRect();

        const action = await onPlayCard(gameState.localPlayer.id, cardId);

        if (action?.type === "PENDING_ACTION_REQUIRED") {
            return;
        }

        setFlyingCard({
            type: "FULL_TO_FULL",
            card,
            sourceRect: cardRect,
            targetRect: discardRect,
            shouldFlip: false,
            startsFaceDown: false
        });
    }

    return (
        <div className="uno-game-board">
            <OpponentArea
                playerRefs={playerRefs}
                playerCardRefs={playerCardRefs}
                registerRef={registerRef}
                lastAction={lastAction}
                opponents={gameState.opponents}
                availableActions={gameState.availableActions}
                currentPlayerId={gameState.currentPlayerId}
                onCallOutUno={onCallOutUno}/>
            <CenterArea
                drawPileRef={drawPileRef}
                discardPileRef={discardPileRef}
                drawPileSize={gameState.drawPileSize}
                discardPileSize={gameState.discardPileSize}
                topCard={gameState.topCard}
                currentColor={gameState.currentColor}
                lastAction={lastAction}
                availableActions={gameState.availableActions}
                onDrawCard={handleDrawCard}/>
            <UnoPlayerArea
                flyingCard={flyingCard}
                playerRefs={playerRefs}
                playerCardRefs={playerCardRefs}
                cardRefs={cardRefs}
                registerRef={registerRef}
                localPlayer={gameState.localPlayer}
                currentPlayerId={gameState.currentPlayerId}
                availableActions={gameState.availableActions}
                lastAction={lastAction}
                pendingCardId={gameState.pendingCardId}
                onPassTurn={onPassTurn}
                onCallUno={onCallUno}
                onPlayCard={handlePlayCard}/>

            {shouldShowWildColorModal && <WildColorModal
                style={{
                    position: "fixed",
                    left: `${pendingCardRect.left + pendingCardRect.width / 2}px`,
                    top: `${pendingCardRect.top - 35}px`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999
                }}
                onChooseWildColor={handleChooseWildColor}/>}

            {gameState.gameStatus === "IN_PROGRESS" &&
                <CurrentPlayerDot
                    currentPlayerId={gameState.currentPlayerId}
                    playerRefs={playerRefs}/>
            }

            {flyingCard?.type === "FULL_TO_FULL" && (
                <UnoFlyingCard
                    card={flyingCard.card}
                    sourceRect={flyingCard.sourceRect}
                    targetRect={flyingCard.targetRect}
                    shouldFlip={flyingCard.shouldFlip}
                    startsFaceDown={flyingCard.startsFaceDown}
                    onAnimationComplete={onFlyingAnimationComplete}
                />
            )}

            {flyingCard?.type === "MINI_TO_FULL" && (
                <MiniToFullFlyingCard
                    card={flyingCard.card}
                    cardWidth={flyingCard.cardWidth}
                    cardHeight={flyingCard.cardHeight}
                    sourceRect={flyingCard.sourceRect}
                    targetRect={flyingCard.targetRect}
                    shouldFlip={flyingCard.shouldFlip}
                    startsFaceDown={flyingCard.startsFaceDown}
                    onAnimationComplete={onFlyingAnimationComplete}
                />
            )}

            {flyingCard?.type === "FULL_TO_MINI" && (
                <FullToMiniFlyingCard
                    card={flyingCard.card}
                    sourceRect={flyingCard.sourceRect}
                    targetRect={flyingCard.targetRect}
                    shouldFlip={flyingCard.shouldFlip}
                    startsFaceDown={flyingCard.startsFaceDown}
                    onAnimationComplete={onFlyingAnimationComplete}
                />
            )}
        </div>
    )
}