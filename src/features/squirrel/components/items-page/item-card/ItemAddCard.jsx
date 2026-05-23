import {ITEMS} from "../../../data/Item-data.js";
import ActionToggle from "../../ActionToggle.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ItemAddFormCard from "./ItemAddFormCard.jsx";
import ItemAddSelectionCard from "./ItemAddSelectionCard.jsx";
import ItemAddSelectionGrid from "./ItemAddSelectionGrid.jsx";
import {API_BASE_URL} from "../../../../../config/api.js";

export default function ItemAddCard({items, stashId}) {

    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const currentItemIds = items.map(item => item.id);
    const availableItems = ITEMS.filter(item => !currentItemIds.includes(item.id));

    async function addItem() {
        await fetch(`${API_BASE_URL}/stashes/${stashId}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                itemId: selectedItem.id,
                quantity: selectedQuantity
            })
        })
        navigate(`/stashes/${stashId}`, {replace: true});
        setIsAdding(false);
        setSelectedItem(null);
        setSelectedQuantity(1);
    }

    return (
        <>
            {isAdding ?
                <ItemAddSelectionGrid
                    availableItems={availableItems}
                    selectedItem={selectedItem}
                    selectedQuantity={selectedQuantity}
                    setSelectedQuantity={setSelectedQuantity}
                    addItem={addItem}
                    setIsAdding={setIsAdding}
                    setSelectedItem={setSelectedItem}/> :
                <div className="item-card item-add-card card-interactive" onClick={() => setIsAdding(true)}>
                    Add Item
                </div>
            }
        </>
    )
}