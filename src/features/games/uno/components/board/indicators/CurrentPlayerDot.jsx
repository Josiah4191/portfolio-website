import './CurrentPlayerDot.css'
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function CurrentPlayerDot({currentPlayerId, playerRefs}) {
    const [dotPosition, setDotPosition] = useState(null);

    useEffect(() => {
        function updateDotPosition() {
            const element = playerRefs.current[currentPlayerId];
            if (!element) return;

            const rect = element.getBoundingClientRect();

            setDotPosition({
                left: rect.left,
                top: rect.top
            });
        }

        updateDotPosition();

        window.addEventListener("resize", updateDotPosition);
        window.addEventListener("scroll", updateDotPosition, true);

        return () => {
            window.removeEventListener("resize", updateDotPosition);
            window.removeEventListener("scroll", updateDotPosition, true);
        }

    }, [currentPlayerId, playerRefs]);

    if (!dotPosition) return null;

    return (
        <motion.div
            area-hidden="true"
            className="current-player-dot"
            animate={{
                left: dotPosition.left,
                top: dotPosition.top,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
            }}/>

    )
}