import {useState} from "react";
import './WordSearchCategorySelect.css'

export default function WordSearchCategorySelect({puzzles, currentPuzzle, setSelectedPuzzle,}) {
    const [isOpen, setIsOpen] = useState(false);
    const category = currentPuzzle.category;

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
                <span className="word-search-dropdown-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
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
                {puzzles.map((puzzle) => {
                    const category = puzzle.category;
                    const isSelected = puzzle === currentPuzzle;
                    return (
                        <li key={category}>
                            <button
                                type="button"
                                className={`word-search-dropdown-option ${isSelected ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPuzzle(puzzle);
                                    setIsOpen(false);
                                }}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}