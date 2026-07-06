import Modal from "../../../../../shared/components/Modal.jsx";
import UnoRulesPanel from "./UnoRulesPanel.jsx";

export default function UnoRulesModal({isOpen, onClose}) {
    return (
        <Modal className="modal-panel" isOpen={isOpen} onClose={onClose}>
            <UnoRulesPanel/>
        </Modal>
    )
}