import './Modal.css'
import {createPortal} from "react-dom";
import {useEffect} from "react";
import CloseButton from "./CloseButton.jsx";

export default function Modal({isOpen, onClose, children, width = "700px", closeOnEscape = true}) {

    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        function handleEscapeKey(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleEscapeKey);

        return () => window.removeEventListener("keydown", handleEscapeKey);
    }, [isOpen, closeOnEscape, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-panel"
                style={{width}}
                onClick={(e) => e.stopPropagation()}>
                {onClose && <CloseButton onClose={onClose}/>}
                {children}
            </div>
        </div>,
        document.body
    );
}