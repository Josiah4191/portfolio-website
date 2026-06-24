import './UnoDrawPile.css'

export default function UnoDrawPile({onDrawCard, canDraw, drawPileRef}) {
    return (
        <div className="uno-draw-pile">
            <button
                type="button"
                className="uno-draw-pile-card"
                onClick={onDrawCard}
                disabled={!canDraw}
                ref={drawPileRef}/>
        </div>
    )
}