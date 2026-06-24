import './WildColorModal.css'

export default function WildColorModal({onChooseWildColor, style}) {

    const colors = ["RED", "BLUE", "GREEN", "YELLOW"];

    return (
        <div className="wild-color-modal" style={style}>

            {colors.map((color) => (
                <button
                    key={color}
                    type="button"
                    className={`wild-card ${color.toLowerCase()}`}
                    aria-label={`Choose ${color.toLowerCase()}`}
                    onClick={() => onChooseWildColor(color)}
                />
            ))}
        </div>
    )
}