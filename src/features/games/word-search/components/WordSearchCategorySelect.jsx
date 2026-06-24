import {useState} from "react";
import './WordSearchCategorySelect.css'

export default function WordSearchCategorySelect({value, setValue, options}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`word-search-dropdown-select`}>
            <button
                type="button"
                className="word-search-dropdown-button"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
                aria-expanded={isOpen}
                aria-haspopup="listbox">
                <span className="word-search-dropdown-text">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                <span className={`word-search-dropdown-arrow ${isOpen ? "visible" : ""}`} aria-hidden="true">
                    ▾
                </span>
            </button>

            {isOpen &&
                <div
                    aria-hidden="true"
                    className="word-search-dropdown-overlay"
                    onClick={() => setIsOpen(false)}/>}

            <ul className={`word-search-dropdown-menu ${isOpen ? "open" : ""}`}>
                {options.map((option) => {
                    return (
                        <li key={option}>
                            <button
                                type="button"
                                className={`word-search-dropdown-option ${option === value ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setValue(option);
                                    setIsOpen(false);
                                }}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}