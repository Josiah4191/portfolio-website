import {useState} from "react";
import './DropdownSelect.css'

export default function DropdownSelect({value, setValue, options, width}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`word-search-dropdown-select ${width}`}>
            <button className="word-search-dropdown-button" onClick={() => {
                setIsOpen(!isOpen);
            }}>
                <span className="word-search-dropdown-text">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                <span className="word-search-dropdown-arrow">▾</span>
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