import './UnoCard.css'
import {Ban, RefreshCw} from "lucide-react";

const CARD_VALUES = {
    ZERO: {label: "0", type: "text"},
    ONE: {label: "1", type: "text"},
    TWO: {label: "2", type: "text"},
    THREE: {label: "3", type: "text"},
    FOUR: {label: "4", type: "text"},
    FIVE: {label: "5", type: "text"},
    SIX: {label: "6", type: "text"},
    SEVEN: {label: "7", type: "text"},
    EIGHT: {label: "8", type: "text"},
    NINE: {label: "9", type: "text"},
    SKIP: {icon: Ban, type: "icon"},
    REVERSE: {icon: RefreshCw, type: "icon"},
    DRAW_TWO: {label: "+2", type: "text"},
    WILD: {label: "W", type: "text"},
    WILD_DRAW_FOUR: {label: "+4", type: "text"}
};

export default function CardValue({value, color, className}) {
    const config = CARD_VALUES[value];

    if (!config) return null;

    if (config.type === "icon") {
        const Icon = config.icon;
        return (
            <span className={className}>
             <Icon className={`card-value-icon ${color}`} strokeWidth={3}/>
            </span>
        )
    }

    return <span className={`${className} ${color}`}>{config.label}</span>;
}