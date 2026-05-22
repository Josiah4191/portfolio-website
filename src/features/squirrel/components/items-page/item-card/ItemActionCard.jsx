import ActionToggle from "../../ActionToggle.jsx";
import ActionButton from "../../ActionButton.jsx";

export default function ItemActionCard({currentItem, item, setIsEditing, setIsSelectingQuantity, setSelectedValue, removeItem}) {
    return (
        <div className="item-card item-action-card">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <h3 className="item-card-name">{item.name} x{item.quantity}</h3>
            </div>
            <div className="action-buttons">
                <ActionButton variant="action-button-edit" onClick={() => {
                    setSelectedValue(item.quantity);
                    setIsSelectingQuantity(true);}}>Edit</ActionButton>
                <ActionButton variant="action-button-remove" onClick={removeItem}>Remove</ActionButton>
                <ActionToggle onClick={() => {
                    setSelectedValue(null);
                    setIsSelectingQuantity(null);
                    setIsEditing(null);
                }}/>
            </div>
        </div>
    )
}