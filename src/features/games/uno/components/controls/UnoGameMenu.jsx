import './UnoGameMenu.css'
import {useState} from "react";

export default function UnoGameMenu({startGame}) {

    const [playerCount, setPlayerCount] = useState(2);

    function handleStartGame() {
        startGame(playerCount - 1);
    }

    return (
        <div className="uno-game-menu">
            <div className="uno-menu-content">
                <h1 className="uno-game-title">UNO</h1>

                <div className="uno-player-selection" aria-labelledby="uno-player-count-title">

                    <h2 id="uno-player-count-title" className="uno-player-count-title">Players</h2>

                    <div className="uno-player-count-options">
                        <div className="corner top-left" />
                        <div className="corner top-right" />
                        {[2, 3, 4, 5].map((count) => (
                            <button
                                key={count}
                                type="button"
                                className={`uno-player-count`}
                                aria-pressed={playerCount === count}
                                onClick={() => setPlayerCount(count)}>
                                <span className="uno-player-number">{count}</span>
                                <div
                                    aria-hidden="true"
                                    className={`uno-player-dot ${playerCount === count ? "selected" : ""}`}
                                />
                            </button>
                        ))}
                        <div className="corner bottom-left" aria-hidden="true" />
                        <div className="corner bottom-right" aria-hidden="true" />
                    </div>
                </div>

                <button
                    type="button"
                    className="uno-start-game-button"
                    onClick={handleStartGame}>
                    Start Game
                </button>

            </div>
        </div>
    )
}