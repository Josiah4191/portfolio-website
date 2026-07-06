import "./GameTooltip.css"

export default function GameTooltip({title, description}) {
    return (
        <div className="game-tooltip">
            <h3 className="game-tooltip-title">{title}</h3>
            <p className="game-tooltip-description">{description}</p>
        </div>
    )
}