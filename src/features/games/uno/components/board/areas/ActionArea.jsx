import './ActionArea.css'
import {useEffect, useState} from "react";
import {buildActionMessage} from "../../../utils/utils.js";

export default function ActionArea({lastAction}) {
    const [actionMessages, setActionMessages] = useState([]);

    useEffect(() => {
        const messageData = buildActionMessage(lastAction);

        if (!messageData?.message) {
            return;
        }

        const message = {
            id: Date.now() + Math.random(),
            ...messageData
        };

        setActionMessages((previous) => [...previous, message]);

        const timeout = setTimeout(() => {
            setActionMessages(previous => previous.filter(item => item.id !== message.id));
        }, 2200);

        return () => clearTimeout(timeout);
    }, [lastAction])

    if (actionMessages.length === 0) return null;

    return (
        <div className="action-area">
            {actionMessages.map(actionText => (
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
            ))}
        </div>
    )
}