import './Components.css'
import DotsIcon from "../../../icons/DotsIcon.jsx";

export default function ActionToggle({onClick}) {
    return (
        <div className="action-toggle" onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}>
            <DotsIcon/>
        </div>
    )
}