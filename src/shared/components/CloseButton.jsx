import './CloseButton.css';
import {X} from "lucide-react";

export default function CloseButton({onClose}) {
    return (
        <button
            type="button"
            className="close-button"
            onClick={onClose}>
            <X className="close-button-icon" strokeWidth={2.5} aria-hidden="true"/>
        </button>
    )
}