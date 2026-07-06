import Modal from "../../../../../shared/components/Modal.jsx";
import GameOverPanel from "./GameOverPanel.jsx";

export default function GameOverModal({isOpen, winnerName, onPlayAgain, onExitToMenu}) {
    return (
        <Modal isOpen={isOpen} width="400px">
            <GameOverPanel winnerName={winnerName} onPlayAgain={onPlayAgain} onExitToMenu={onExitToMenu}/>
        </Modal>
    )
}