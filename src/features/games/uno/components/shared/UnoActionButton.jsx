import "./UnoActionButton.css";
import GameButton from "./GameButton.jsx";
import GameTooltip from "./GameTooltip.jsx";

export default function UnoActionButton({
                                            className = "",
                                            icon,
                                            keybind,
                                            tooltipTitle,
                                            isDisabled,
                                            tooltipDescription,
                                            children,
                                            ...props
                                        }) {
    return (
        <div className={`uno-action-button-wrapper ${isDisabled}`}>
            <GameButton
                className={`uno-action-button ${className}`}
                icon={icon}
                {...props}>
                {children}
            </GameButton>

            <span className="uno-action-keybind">{keybind}</span>

            <GameTooltip title={tooltipTitle} description={tooltipDescription}/>
        </div>
    );
}