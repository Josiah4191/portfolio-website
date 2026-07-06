import Modal from "../../../../../shared/components/Modal.jsx";
import WildColorPanel from "./WildColorPanel.jsx";

export default function WildColorModal({isOpen, onChooseWildColor}) {
    return(
        <Modal isOpen={isOpen} width="260px">
            <WildColorPanel onChooseWildColor={onChooseWildColor} />
        </Modal>
    )
}