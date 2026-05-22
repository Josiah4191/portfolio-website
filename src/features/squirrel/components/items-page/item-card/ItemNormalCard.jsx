import ActionToggle from "../../ActionToggle.jsx";

export default function ItemNormalCard({currentItem, item, setIsEditing}) {
    return (
        <div className="item-card">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <h3 className="item-card-name">{item.name} x{item.quantity}</h3>
            </div>
            <p>{item.description}</p>
            <ActionToggle onClick={() => setIsEditing(true)}/>
        </div>
    )
}