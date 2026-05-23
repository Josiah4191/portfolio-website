import './ItemCard.css';
import {ITEMS} from "../../../data/Item-data.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ItemActionCard from "./ItemActionCard.jsx";
import ItemNormalCard from "./ItemNormalCard.jsx";
import ItemEditCard from "./ItemEditCard.jsx";
import {API_BASE_URL} from "../../../../../config/api.js";

export default function ItemCard({stashId, item}) {

    const [isEditing, setIsEditing] = useState(false);
    const [isSelectingQuantity, setIsSelectingQuantity] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const navigate = useNavigate();
    const currentItem = ITEMS.find(i => i.name === item.name);

    async function removeItem() {
        if (!window.confirm("Delete this item?")) {
            return;
        }

        await fetch(`${API_BASE_URL}/stash_lines/${item.stashLineId}`, {
            method: 'DELETE'
        })
        navigate(`/stashes/${stashId}`, {replace: true});
        setIsEditing(null);
        setSelectedValue(null);
    }

    async function updateItem() {
        await fetch(`${API_BASE_URL}/stash_lines/${item.stashLineId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({quantity: selectedValue})
        });

        navigate(`/stashes/${stashId}`, {replace: true});
        setIsEditing(null);
    }

    return (
        <>
            {isEditing ?
                (isSelectingQuantity ?
                    <ItemEditCard
                        currentItem={currentItem}
                        item={item}
                        setIsEditing={setIsEditing}
                        setIsSelectingQuantity={setIsSelectingQuantity}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                        updateItem={updateItem}/> :
                    <ItemActionCard
                        currentItem={currentItem}
                        item={item}
                        setIsEditing={setIsEditing}
                        setIsSelectingQuantity={setIsSelectingQuantity}
                        setSelectedValue={setSelectedValue}
                        removeItem={removeItem}/>) :
                <ItemNormalCard
                    currentItem={currentItem}
                    item={item}
                    setIsEditing={setIsEditing}/>
            }
        </>
    );
}