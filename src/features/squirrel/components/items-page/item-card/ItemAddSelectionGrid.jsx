import ItemAddFormCard from "./ItemAddFormCard.jsx";
import ItemAddSelectionCard from "./ItemAddSelectionCard.jsx";
import ActionToggle from "../../ActionToggle.jsx";

export default function ItemAddSelectionGrid({availableItems, selectedItem, setSelectedItem, selectedQuantity, setSelectedQuantity, setIsAdding, addItem}) {
    return (
        <div className="item-card">
            <div className="item-selection-list">
                {
                    availableItems.length === 0 ? (
                        <p>All available items have already been added.</p>
                        ) :
                    availableItems.map((item) => {
                    const isSelected = item.id === selectedItem?.id;
                    return isSelected ?
                        <ItemAddFormCard
                            key={item.id}
                            item={item}
                            addItem={addItem}
                            setSelectedItem={setSelectedItem}
                            selectedQuantity={selectedQuantity}
                            setSelectedQuantity={setSelectedQuantity}/> :
                        <ItemAddSelectionCard
                            key={item.id}
                            item={item}
                            setSelectedItem={setSelectedItem}/>
                })}
            </div>
            <ActionToggle onClick={() => setIsAdding(false)}/>
        </div>
    )
}