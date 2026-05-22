import {SQUIRREL_NAMES} from "../../../data/Squirrel-names.js";
import ActionButton from "../../ActionButton.jsx";
import SelectionInput from "../../SelectionInput.jsx";

export default function SquirrelAddFormCard({addSquirrel, setIsAdding, selectedName, setSelectedName}) {
    return (
        <div className="squirrel-card squirrel-edit-card">
            <p className="squirrel-card-label">Select Squirrel</p>
            <SelectionInput options={SQUIRREL_NAMES} selectedValue={selectedName} setSelectedValue={setSelectedName}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={addSquirrel}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => setIsAdding(null)}>Cancel</ActionButton>
            </div>
        </div>
    )
}