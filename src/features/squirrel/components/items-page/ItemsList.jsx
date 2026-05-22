import ItemAddCard from "./item-card/ItemAddCard.jsx";
import ItemCard from "./item-card/ItemCard.jsx";

export default function ItemsList({items, stashId}) {
    return (
        <div className="card-list">
            <ItemAddCard items={items} stashId={stashId}/>
            {items.map(item => <ItemCard key={item.id} stashId={stashId} item={item}/>)}
        </div>
    )
}