import './UnoFlyingCard.css'
import UnoCard from "../cards/UnoCard.jsx";
import {motion} from "framer-motion";
import UnoCardBack from "../cards/UnoCardBack.jsx";

export default function FullToMiniFlyingCard ({
                                          card,
                                          sourceRect,
                                          targetRect,
                                          shouldFlip,
                                          startsFaceDown,
                                          onAnimationComplete,
                                      }) {

    const baseWidth = Math.max(sourceRect.width, targetRect.width);
    const baseHeight = Math.max(sourceRect.height, targetRect.height);

    const sourceCenterX = sourceRect.left + sourceRect.width / 2;
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;

    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    const startLeft = sourceCenterX - baseWidth / 2;
    const startTop = sourceCenterY - baseHeight / 2;

    const targetLeft = targetCenterX - baseWidth / 2;
    const targetTop = targetCenterY - baseHeight / 2;

    const deltaX = targetLeft - startLeft;
    const deltaY = targetTop - startTop;

    const initialScaleX = sourceRect.width / baseWidth;
    const initialScaleY = sourceRect.height / baseHeight;

    const targetScaleX = targetRect.width / baseWidth;
    const targetScaleY = targetRect.height / baseHeight;

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
                width: baseWidth,
                height: baseHeight,
                zIndex: 9999,
                pointerEvents: "none",
            }}
            animate={
                {
                    x: deltaX,
                    y: deltaY,
                    scaleX: targetScaleX,
                    scaleY: targetScaleY,
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