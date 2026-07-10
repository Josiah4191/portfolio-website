import "./UnoToolbar.css";
import GameToolbar from "../GameToolbar.jsx";

export default function UnoToolbar({children}) {
    return (
        <GameToolbar className="uno-toolbar">
            {children}
        </GameToolbar>
    )
}