import './CenterArea.css'
import UnoDiscardPile from "../piles/UnoDiscardPile.jsx";
import UnoDrawPile from "../piles/UnoDrawPile.jsx";
import ActionArea from "./ActionArea.jsx";

export default function CenterArea({
                                       discardPileRef,
                                       drawPileRef,
                                       drawPileSize,
                                       discardPileSize,
                                       lastAction,
                                       topCard,
                                       availableActions,
                                       currentColor,
                                       onDrawCard
                                   }) {
    const {canDraw} = availableActions;

    return (
        <div className="center-area">
            <ActionArea lastAction={lastAction}/>
            <UnoDrawPile
                drawPileSize={drawPileSize}
                drawPileRef={drawPileRef}
                canDraw={canDraw}
                onDrawCard={onDrawCard}/>
            <UnoDiscardPile
                discardPileSize={discardPileSize}
                discardPileRef={discardPileRef}
                currentColor={currentColor}
                topCard={topCard}/>
        </div>
    )
}