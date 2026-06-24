import './UnoDiscardCard.css'
import UnoCardFace from "./UnoCardFace.jsx";

export default function UnoDiscardCard({card, displayColor, cardRef}) {
    return (
        <div ref={cardRef}>
            <UnoCardFace card={card} displayColor={displayColor}/>
        </div>
    )
}