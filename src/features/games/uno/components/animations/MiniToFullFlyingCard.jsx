import './UnoFlyingCard.css'
import UnoCard from "../cards/UnoCard.jsx";
import {motion} from "framer-motion";
import UnoCardBack from "../cards/UnoCardBack.jsx";

export default function MiniToFullFlyingCard({
                                                 card,
                                                 cardWidth,
                                                 cardHeight,
                                                 sourceRect,
                                                 targetRect,
                                                 shouldFlip,
                                                 startsFaceDown,
                                                 onAnimationComplete,
                                             }) {

    const sourceCenterX = sourceRect.left + sourceRect.width / 2;
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;

    const startLeft = sourceCenterX - cardWidth / 2;
    const startTop = sourceCenterY - cardHeight / 2;

    const endLeft = targetRect.left;
    const endTop = targetRect.top;

    const deltaX = endLeft - startLeft;
    const deltaY = endTop - startTop;

    const initialScaleX = sourceRect.width / cardWidth;
    const initialScaleY = sourceRect.height / cardHeight;

    const finalScaleX = targetRect.width / cardWidth;
    const finalScaleY = targetRect.height / cardHeight;

    return (
        <motion.div
            aria-hidden="true"
            className="uno-flying-card"
            initial={{
                x: 0,
                y: 0,
                scaleX: initialScaleX,
                scaleY: initialScaleY,
                rotateY: startsFaceDown ? 180 : 0,
            }}
            style={{
                position: "fixed",
                left: startLeft,
                top: startTop,
                width: cardWidth,
                height: cardHeight,
                zIndex: 9999,
                pointerEvents: "none",
            }}
            animate={
                {
                    x: deltaX,
                    y: deltaY,
                    scaleX: finalScaleX,
                    scaleY: finalScaleY,
                    rotateY: shouldFlip ? 0 : (startsFaceDown ? 180 : 0)
                }
            }
            transition={{
                duration: 0.7,
                ease: "easeInOut"
            }}
            onAnimationComplete={onAnimationComplete}>

            <div className="uno-flying-card-side">
                {card && <UnoCard card={card}/>}
            </div>

            <div className="uno-flying-card-side uno-flying-card-back">
                <UnoCardBack/>
            </div>

        </motion.div>
    )
}