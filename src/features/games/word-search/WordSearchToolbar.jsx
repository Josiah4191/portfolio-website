import "./WordSearchToolbar.css";
import GameToolbar from "../GameToolbar.jsx";

export default function WordSearchToolbar({children}) {
    return (
        <GameToolbar className="word-search-toolbar" labelClassName="word-search-toolbar-label">
            {children}
        </GameToolbar>
    )
}