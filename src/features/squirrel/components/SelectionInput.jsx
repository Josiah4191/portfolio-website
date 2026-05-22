import './Components.css'

export default function SelectionInput({selectedValue, setSelectedValue, options}) {
    return (
        <select className="selection-input" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            {options.map((name) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </select>
    )
}