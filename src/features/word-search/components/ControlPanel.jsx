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
            <DropdownSelect label={"Difficulty"} value={difficulty} setValue={setDifficulty}
                            options={difficultyOptions}/>
            <DropdownSelect label={"Category"} value={category} setValue={setCategory}
                            options={categoryOptions}/>
            <button className="word-search-new-puzzle-button" onClick={buildPuzzle}>New Puzzle</button>
        </div>
    )
}