import ActionToggle from "../../ActionToggle.jsx";
import ActionButton from "../../ActionButton.jsx";

export default function ItemEditCard({currentItem, item, setIsEditing, setIsSelectingQuantity, selectedValue, setSelectedValue, updateItem}) {
    return (
        <div className="item-card item-edit-card">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <h3 className="item-card-name">{item.name}</h3>
            </div>
            <input
                className="quantity-input"
                type="number"
                min="0"
                max="100"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={updateItem}>Confirm</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => {
                    setSelectedValue(null);
                    setIsSelectingQuantity(null);
                }}>Cancel</ActionButton>
                <ActionToggle onClick={() => {
                    setSelectedValue(null);
                    setIsSelectingQuantity(null);
                    setIsEditing(null);
                }}/>
            </div>
        </div>
    )
}