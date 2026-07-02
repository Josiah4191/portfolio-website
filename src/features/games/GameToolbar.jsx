import './GameToolbar.css'
import {Link} from "react-router-dom";

export default function GameToolbar({children}) {
    return (
        <header className="nav-section game-nav-section">
            <div className="game-toolbar-content">
                <Link className="game-toolbar-link" to="/">
                    <div className="game-nav-logo-mark"><span>J</span></div>
                    <span className="type-nav-logo">Portfolio</span>
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