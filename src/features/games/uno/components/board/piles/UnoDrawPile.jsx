import './UnoDrawPile.css'
import UnoLogo from "../../../UnoLogo.jsx";

export default function UnoDrawPile({onDrawCard, canDraw, drawPileRef}) {
    return (
        <div className="uno-draw-pile-card">
                <button
                    type="button"
                    className="uno-draw-pile-button"
                    onClick={onDrawCard}
                    disabled={!canDraw}
                    ref={drawPileRef}>
                <UnoLogo/>
                </button>
        </div>
    )
}