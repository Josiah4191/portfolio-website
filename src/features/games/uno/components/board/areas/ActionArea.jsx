import './ActionArea.css'
import {useEffect, useState} from "react";
import {buildActionMessage} from "../../../utils/refUtils.js";

export default function ActionArea({lastAction}) {

    const [actionText, setActionText] = useState(null);

    useEffect(() => {
        const messageData = buildActionMessage(lastAction);

        if (!messageData?.message) {
            return;
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActionText(messageData);

        const timeout = setTimeout(() => {
            setActionText(null);
        }, 2200);

        return () => clearTimeout(timeout);
    }, [lastAction])

    if (!actionText) return null;

    return (
        <div className="action-area">
            {actionText && (
                <div
                    aria-live="polite"
                    className="action-area-message">
                    {actionText.message}
                    {actionText.color && (
                        <span className={`action-color ${actionText.color.toLowerCase()}`}>
                    {" "}
                            {actionText.color}
                </span>
                    )}
                </div>
            )}
        </div>
    )
}