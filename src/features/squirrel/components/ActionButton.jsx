import './Components.css'

export default function ActionButton({variant, onClick, children}) {
    return (
        <button className={`action-button ${variant}`} onClick={onClick}>{children}</button>
    )
}