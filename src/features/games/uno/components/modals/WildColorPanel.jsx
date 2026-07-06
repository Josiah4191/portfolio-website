import './WildColorPanel.css'
import Panel from "../shared/Panel.jsx";
import GameButton from "../shared/GameButton.jsx";

export default function WildColorPanel({onChooseWildColor}) {

    const colors = ["RED", "BLUE", "GREEN", "YELLOW"];

    return (
        <Panel className="wild-color-panel">
            <h2 className="wild-color-title">CHOOSE COLOR</h2>
            <div className="wild-color-options">
                {colors.map((color) => (
                    <GameButton
                        key={color}
                        type="button"
                        className={`wild-card ${color.toLowerCase()}`}
                        aria-label={`Choose ${color.toLowerCase()}`}
                        onClick={() => onChooseWildColor(color)}
                    />
                ))}
            </div>
        </Panel>
    )
}