import './GameOver.css'
import {Link} from "react-router-dom";
export default function GameOver({winnerName, onExitToMenu}) {
    return (
            <section className="game-over" aria-labelledby="game-over-title">
                <header className="game-over-header">
                    <h1 id="game-over-title" className="game-over-title">Game Over</h1>
                    <p className="game-over-winner">{winnerName} wins!</p>
                </header>

                <div className="game-over-actions" aria-label="Game over actions">
                    <button
                        type="button"
                        className="game-menu-button"
                        onClick={onExitToMenu}>
                        New Game
                    </button>

                    <Link className="game-menu-button" to="/">Portfolio</Link>
                </div>
            </section>
    )
}