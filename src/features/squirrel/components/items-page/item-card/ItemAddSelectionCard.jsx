export default function ItemAddSelectionCard({item, setSelectedItem}) {
    return (
        <div className="item-card-display item-selection-card card-interactive" onClick={() => setSelectedItem(item)}>
            <p>{item.name}</p>
            <img className="item-card-image" src={item.image} alt={item.name}/>
        </div>
    )
}