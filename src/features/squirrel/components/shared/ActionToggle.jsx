import "./ActionToggle.css";
import DotsIcon from "../../../../shared/icons/DotsIcon.jsx";

export default function ActionToggle({onClick}) {
    return (
        <button
            type="button"
            aria-label="Actions"
            className="action-toggle card-interactive"
            onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}>
            <DotsIcon/>
        </button>
    )
}