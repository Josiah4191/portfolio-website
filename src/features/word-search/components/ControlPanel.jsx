import {CATEGORIES} from "../data/Puzzles.js";
import DropdownSelect from "./DropdownSelect.jsx";
import './ControlPanel.css'

export default function ControlPanel({
                                         difficulty,
                                         setDifficulty,
                                         category,
                                         setCategory,
                                         buildPuzzle
                                     }) {
    const difficultyOptions = ["easy", "medium", "hard"];
    const categoryOptions = CATEGORIES.map((cat) => cat.category);

    return (
        <div className="word-search-control-panel">
            <DropdownSelect value={difficulty} setValue={setDifficulty} width={"small"}
                            options={difficultyOptions}/>
            <DropdownSelect value={category} setValue={setCategory} width={"large"}
                            options={categoryOptions}/>
            <button className="word-search-new-puzzle-button" onClick={buildPuzzle}>New Puzzle</button>
        </div>
    )
}