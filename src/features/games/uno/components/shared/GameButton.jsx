import "./GameButton.css";
import {Link} from "react-router-dom";

export default function GameButton({className = "", icon: Icon, to, children, ...props}) {
    const Component = to ? Link : "button"
    
    return (
        <Component
            type="button"
            to={to}
            className={`game-button ${className}`} {...props}>
            {Icon && <Icon className="game-button-icon" aria-hidden="true"/>}
            {children && <span className="game-button-label">{children}</span>}
        </Component>
    )
}