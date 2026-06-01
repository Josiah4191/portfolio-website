import {useState} from "react";
import './DropdownSelect.css'

export default function DropdownSelect({label, value, setValue, options}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="word-search-dropdown-select">
            <button className="word-search-dropdown-button" onClick={() => {
                setIsOpen(!isOpen);
            }}>{label} ▾
            </button>

            {isOpen && <div className="word-search-dropdown-overlay" onClick={() => setIsOpen(false)}/>}

            <div className={`word-search-dropdown-menu ${isOpen ? "open" : ""}`}>
                {options.map((option) => {
                    return <button key={option}
                                   className={`word-search-dropdown-option ${option === value ? "selected" : ""}`}
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       setValue(option);
                                       setIsOpen(false);
                                   }}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
                })}
            </div>

        </div>
    )
}