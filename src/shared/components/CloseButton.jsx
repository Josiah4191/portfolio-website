import './CloseButton.css';

export default function CloseButton({onClose}) {
    return (
        <button
            type="button"
            className="close-button"
            onClick={onClose}>
            ✕
        </button>
    )
}