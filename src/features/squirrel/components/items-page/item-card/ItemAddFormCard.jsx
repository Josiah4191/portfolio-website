import ActionButton from "../../ActionButton.jsx";

export default function ItemAddFormCard({item, addItem, setSelectedItem, selectedQuantity, setSelectedQuantity}) {
    return (
        <div className="item-card-display item-selection-card item-selection-card-selected" onClick={() => setSelectedItem(item)}>
            <p>{item.name}</p>
            <input
                className="quantity-input"
                type="number"
                min="0"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}/>
            <div className="action-buttons action-buttons-mobile">
                <ActionButton variant="action-button-confirm" onClick={addItem}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(null);
                }}>Cancel</ActionButton>
            </div>
        </div>
    )
}