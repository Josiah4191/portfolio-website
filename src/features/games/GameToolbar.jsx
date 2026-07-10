import './GameToolbar.css'
import {Link} from "react-router-dom";

export default function GameToolbar({className = "", labelClassName="", children}) {
    return (
        <header className={`game-toolbar ${className}`}>
            <div className="game-toolbar-content">
                <Link className="game-toolbar-link" to="/">
                    <span className={`game-nav-label ${labelClassName}`}>Portfolio</span>
                </Link>
                {children && (
                    <div className="game-toolbar-actions">
                        {children}
                    </div>
                )}
            </div>
        </header>
    )
}