import './UnoGamePage.css'
import UnoGameBoard from "../components/board/UnoGameBoard.jsx";
import UnoGameMenu from "../components/controls/UnoGameMenu.jsx";
import GameToolbar from "../../GameToolbar.jsx";
import GameButton from "../components/shared/GameButton.jsx";
import UnoRulesModal from "../components/modals/UnoRulesModal.jsx";
import GameOverModal from "../components/modals/GameOverModal.jsx";
import {useEffect, useState} from "react";
import {
    createGame,
    drawCard,
    playCard,
    passTurn,
    playBotTurn,
    chooseWildColor,
    callUno,
    callOutUno
} from "../services/unoApi.js";
import {BookOpen, Play} from "lucide-react";

export default function UnoGamePage() {
    const [gameState, setGameState] = useState(null);
    const [gameId, setGameId] = useState(null);
    const playerName = "Player 1";
    const [flyingCard, setFlyingCard] = useState(null);
    const [pendingGameState, setPendingGameState] = useState(null);
    const [lastAction, setLastAction] = useState(null);
    const [openRules, setOpenRules] = useState(false);

    async function startGame(playerCount) {
        const game = await createGame(playerName, playerCount);
        setGameState(game.gameState);
        setGameId(game.gameId);
    }

    function exitToMenu() {
        setGameState(null);
        setGameId(null);
    }

    function handleFlyingCardAnimationComplete() {
        setGameState(pendingGameState);
        setFlyingCard(null);
        setPendingGameState(null);
    }

    async function handlePlayCard(playerId, cardId, chosenColor = null) {
        const response = await playCard(gameId, playerId, cardId, chosenColor);

        if (response.lastAction.type === "PENDING_ACTION_REQUIRED") {
            setGameState(response.gameState);
            return response.lastAction;
        }

        setPendingGameState(response.gameState);
        setLastAction(response.lastAction);
        return response.lastAction;
    }

    async function handleDrawCard() {
        const response = await drawCard(gameId, gameState.currentPlayerId);
        setPendingGameState(response.gameState);
        setLastAction(response.lastAction);
        return response.lastAction;
    }

    async function handlePassTurn() {
        const response = await passTurn(gameId);
        setGameState(response.gameState);
        setLastAction(response.lastAction);
    }

    async function handleChooseWildColor(color) {
        const response = await chooseWildColor(gameId, gameState.currentPlayerId, gameState.pendingCardId, color);
        setPendingGameState(response.gameState);
        setLastAction(response.lastAction);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function handleCallUno(playerId) {
        const response = await callUno(gameId, playerId);
        setGameState(response.gameState);
        setLastAction(response.lastAction);
    }

    async function handleCallOutUno(playerId) {
        const response = await callOutUno(gameId, playerId);
        setGameState(response.gameState);
        setLastAction(response.lastAction);
    }

    function getWinner() {

        if (!gameState) {
            return "No Winner";
        }

        if (gameState.winnerId === gameState.localPlayer.id) {
            return gameState.localPlayer.name;
        }

        const winner = gameState.opponents.find(player => player.id === gameState.winnerId);

        if (!winner) {
            return "No Winner"
        }

        return winner.name;
    }

    const winnerName = getWinner();

    useEffect(() => {
        if (!gameState) return;
        if (gameState.pendingAction !== "UNO_WINDOW") return;

        const pendingPlayerId = gameState.pendingPlayerId;

        if (pendingPlayerId !== gameState.localPlayer.id) return;

        const timer = setTimeout(() => {
            handleCallOutUno(pendingPlayerId);
        }, 2000);

        return () => clearTimeout(timer);
    }, [gameState]);

    useEffect(() => {
        if (!gameId) return;
        if (!gameState) return;
        if (gameState.gameStatus === "FINISHED") return;
        if (gameState.pendingAction !== "UNO_WINDOW") return;

        const pendingPlayerId = gameState.pendingPlayerId;

        if (!pendingPlayerId) return;
        if (pendingPlayerId === gameState.localPlayer.id) return;

        const timer = setTimeout(() => {
            handleCallUno(pendingPlayerId);
        }, 2000);

        return () => clearTimeout(timer);
    }, [gameState, gameId, handleCallUno]);

    useEffect(() => {
        if (!gameId) {
            return;
        }

        if (!gameState) {
            return;
        }

        if (gameState.gameStatus === "FINISHED") {
            return;
        }

        const botCanAct = gameState.currentPlayerType === "COMPUTER" &&
            (
                gameState.pendingAction === "NONE" ||
                gameState.pendingAction === "DRAWN_CARD_PLAYABLE"
            );

        if (!botCanAct) {
            return;
        }

        async function runBotTurn() {
            const response = await playBotTurn(gameId);
            setPendingGameState(response.gameState);
            setLastAction(response.lastAction);
        }

        const timeoutId = setTimeout(runBotTurn, 1500);

        return () => clearTimeout(timeoutId);

    }, [gameState, gameId])

    return (
        <main className="uno-game-page" aria-labelledby="uno-game-title">
            <h1 id="uno-game-title" className="sr-only">UNO</h1>

            <GameToolbar>
                {gameState && (
                    <>
                        <GameButton
                            className="uno-primary-action-button uno-new-game-button"
                            icon={Play}
                            onClick={exitToMenu}>
                            New Game
                        </GameButton>

                        <GameButton
                            icon={BookOpen}
                            className="uno-secondary-action-button uno-rules-button"
                            onClick={() => setOpenRules(!openRules)}>Rules</GameButton>
                    </>
                )}
            </GameToolbar>

            <UnoRulesModal
                isOpen={openRules}
                onClose={() => setOpenRules(false)}/>

            <GameOverModal
                isOpen={gameState?.gameStatus === "FINISHED"}
                winnerName={winnerName}
                onPlayAgain={startGame}
                onExitToMenu={exitToMenu}/>

            {!gameState && <UnoGameMenu startGame={startGame}/>}
            {gameState && <UnoGameBoard
                gameState={gameState}
                flyingCard={flyingCard}
                lastAction={lastAction}
                setFlyingCard={setFlyingCard}
                onFlyingAnimationComplete={handleFlyingCardAnimationComplete}
                onCallUno={handleCallUno}
                onCallOutUno={handleCallOutUno}
                onChooseWildColor={handleChooseWildColor}
                onPassTurn={handlePassTurn}
                onDrawCard={handleDrawCard}
                onPlayCard={handlePlayCard}/>}
        </main>

    )
}