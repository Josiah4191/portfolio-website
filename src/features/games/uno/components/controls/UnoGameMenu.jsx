import './UnoGameMenu.css'
import {useState} from "react";
import {Play, Users} from "lucide-react";
import Panel from "../shared/Panel.jsx";

export default function UnoGameMenu({startGame}) {

    const [playerCount, setPlayerCount] = useState(2);

    function handleStartGame() {
        startGame(playerCount - 1);
    }

    return (
        <div className="uno-game-menu">
            <div className="uno-menu-content">
                <h1 className="uno-game-title" data-text={"UNO"}>UNO</h1>

                <Panel className="uno-player-selection-panel no-border">
                    <div className="uno-player-selection" aria-labelledby="uno-player-count-title">

                        <div className="uno-player-count-options-wrapper">
                            <h2 id="uno-player-count-title" className="uno-player-count-title">
                                <Users className="uno-player-count-icon" aria-hidden="true"/>
                                Players
                            </h2>

                            <div className="corner top-left"/>
                            <div className="corner top-right"/>

                            <div className="uno-player-count-options">
                                {[2, 3, 4, 5].map((count) => (
                                    <button
                                        key={count}
                                        type="button"
                                        className={`uno-player-count`}
                                        aria-pressed={playerCount === count}
                                        onClick={() => setPlayerCount(count)}>
                                        <span
                                            className={`uno-player-number ${playerCount === count ? "selected" : ""}`}>{count}</span>
                                        <div
                                            aria-hidden="true"
                                            className={`uno-player-dot ${playerCount === count ? "selected" : ""}`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <div className="corner bottom-left" aria-hidden="true"/>
                            <div className="corner bottom-right" aria-hidden="true"/>
                        </div>

                    </div>

                </Panel>

                <button
                    type="button"
                    className="uno-start-game-button"
                    onClick={handleStartGame}>
                    <Play className="uno-start-game-icon" size={28} aria-hidden="true"/>
                    Start Game
                </button>

            </div>
        </div>
    )
}