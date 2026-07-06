import './UnoPlayerActionBar.css'
import {Users, CircleAlert, FastForward, Hand} from "lucide-react";
import {useCallback, useEffect, useMemo} from "react";
import UnoActionButton from "../shared/UnoActionButton.jsx";

export default function UnoPlayerActionBar({
                                               localPlayer,
                                               canCallUno,
                                               canPass,
                                               canDraw,
                                               onDrawCard,
                                               onCallUno,
                                               onCallOutUno,
                                               onPassTurn,
                                               availableActions
                                           }) {
    const callOutUnoPlayerIds = useMemo(() => availableActions?.callOutUnoPlayerIds ?? [],
        [availableActions?.callOutUnoPlayerIds]
    );

    const canCallOutUno = callOutUnoPlayerIds.length > 0;

    const isDraw = canDraw ? "is-draw" : "";
    const isCallUno = canCallUno ? "is-call-uno" : "";
    const isCallOutUno = canCallOutUno ? "is-call-out-uno" : "";
    const isPass = canPass ? "is-pass" : "";
    const isCountdown = canCallUno || canCallOutUno ? "is-countdown" : "";

    const handleCallUno = useCallback(() => {
        onCallUno(localPlayer.id);
    }, [localPlayer.id, onCallUno]);

    const handleCallOutUno = useCallback(() => {
        callOutUnoPlayerIds.forEach(id => onCallOutUno(id));
    }, [callOutUnoPlayerIds, onCallOutUno])

    const handleKeyDown = useCallback((event) => {
        console.log("key pressed", event.key);
        console.log({canCallOutUno, canCallUno, canPass});
        switch (event.key) {
            case "1":
                if (canDraw) {
                    onDrawCard();
                }
                break;
            case "2":
                if (canCallOutUno) {
                    handleCallOutUno();
                }
                break;
            case "3":
                if (canCallUno) {
                    handleCallUno();
                }
                break;
            case "4":
                if (canPass) {
                    onPassTurn();
                }
                break;
        }
    }, [canCallOutUno, canCallUno, canDraw, canPass, handleCallOutUno, handleCallUno, onDrawCard, onPassTurn])

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown])

    return (
        <section
            className="uno-player-action-bar">

            <div className="uno-player-controls">
                <UnoActionButton
                    className={`uno-draw-button ${isDraw}`}
                    icon={Hand}
                    tooltipTitle="Draw Card"
                    tooltipDescription="Draw a card from the deck"
                    keybind={1}
                    isDisabled={canDraw ? "" : "is-disabled"}
                    onClick={onDrawCard}>
                </UnoActionButton>

                <UnoActionButton
                    className={`uno-call-out-button ${isCallOutUno}`}
                    icon={Users}
                    tooltipTitle="Call Out Uno"
                    tooltipDescription="Call out a player who forgot to declare UNO after reaching one card"
                    keybind={2}
                    isDisabled={canCallOutUno ? "" : "is-disabled"}
                    onClick={handleCallOutUno}>
                </UnoActionButton>

                <UnoActionButton
                    className={`uno-call-button ${isCallUno}`}
                    icon={CircleAlert}
                    tooltipTitle="Say UNO"
                    tooltipDescription="Declare UNO when you have one card remaining. If you don't, another player may call you out"
                    keybind={3}
                    isDisabled={canCallUno ? "" : "is-disabled"}
                    onClick={handleCallUno}>
                </UnoActionButton>

                <UnoActionButton
                    className={`uno-pass-button ${isPass}`}
                    icon={FastForward}
                    keybind={4}
                    tooltipTitle="Pass Turn"
                    tooltipDescription="End your turn without playing the card you just drew"
                    onClick={onPassTurn}
                    isDisabled={canPass ? "" : "is-disabled"}>
                </UnoActionButton>
            </div>

            <div className={`uno-countdown-drain ${isCountdown}`}>
                <span className={`uno-countdown-drain-inner ${isCountdown}`}/>
            </div>
        </section>
    )
}