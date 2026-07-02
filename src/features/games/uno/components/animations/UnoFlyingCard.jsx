import './UnoFlyingCard.css'
import UnoCard from "../cards/UnoCard.jsx";
import { motion } from "framer-motion";
import UnoCardBack from "../cards/UnoCardBack.jsx";

export default function UnoFlyingCard({
                                          card,
                                          sourceRect,
                                          targetRect,
                                          shouldFlip,
                                          startsFaceDown,
                                          onAnimationComplete,
                                      }) {
    const sourceCenterX = sourceRect.left + sourceRect.width / 2;
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;

    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    const deltaX = Math.round(targetCenterX - sourceCenterX);
    const deltaY = Math.round(targetCenterY - sourceCenterY);

    return (
        <motion.div
            aria-hidden="true"
            className="uno-flying-card"
            initial={{
                x: 0,
                y: 0,
                rotateY: startsFaceDown ? 180 : 0,
            }}
            style={{
                position: "fixed",
                left: sourceRect.left,
                top: sourceRect.top,
                width: sourceRect.width,
                height: sourceRect.height,
                zIndex: 9999,
                pointerEvents: "none",
            }}
            animate={{
                x: deltaX,
                y: deltaY,
                rotateY: shouldFlip ? 0 : (startsFaceDown ? 180 : 0),
            }}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
            onAnimationComplete={onAnimationComplete}
        >
            <div className="uno-flying-card-side">
                {card && <UnoCard card={card} />}
            </div>

            <div className="uno-flying-card-side uno-flying-card-back">
                <UnoCardBack />
            </div>
        </motion.div>
    );
}