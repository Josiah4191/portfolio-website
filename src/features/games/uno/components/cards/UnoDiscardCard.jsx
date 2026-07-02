import UnoCard from "./UnoCard.jsx";

export default function UnoDiscardCard({card, displayColor, cardRef}) {
    return (
        <div ref={cardRef}>
            <UnoCard card={card} displayColor={displayColor}/>
        </div>
    )
}