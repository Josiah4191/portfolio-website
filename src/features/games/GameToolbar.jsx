import './GameToolbar.css'
import {Link} from "react-router-dom";

export default function GameToolbar({children}) {
    return (
        <header className="game-toolbar">
            <div className="game-toolbar-content">
                <Link className="game-toolbar-link" to="/">
                    Portfolio
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