import './GameOverPanel.css'
import Panel from "../shared/Panel.jsx";
import GameButton from "../shared/GameButton.jsx";
import {Play, House, Trophy, Sparkles} from "lucide-react";

export default function GameOverPanel({winnerName, onExitToMenu}) {
    return (
        <Panel className="game-over-panel" aria-labelledby="game-over-title">
            <header className="game-over-header">
                <span className="game-over-icon-wrapper" aria-hidden="true">
                    <Trophy className="game-over-icon"/>
                </span>
                <h1 id="game-over-title" className="game-over-title">GAME OVER</h1>
                <p className="game-over-winner"><span className="game-over-winner-name">{winnerName}</span> wins!</p>
            </header>

            <div className="game-over-actions" aria-label="Game over actions">
                <GameButton
                    type="button"
                    icon={Play}
                    className="uno-primary-action-button"
                    onClick={onExitToMenu}>
                    New Game
                </GameButton>

                <GameButton
                    icon={House}
                    className="uno-secondary-action-button"
                    to="/">
                    Portfolio
                </GameButton>
            </div>
        </Panel>
    )
}