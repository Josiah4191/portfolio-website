import {SQUIRREL_NAMES} from "../../../data/Squirrel-names.js";
import ActionToggle from "../../ActionToggle.jsx";
import ActionButton from "../../ActionButton.jsx";
import SelectionInput from "../../SelectionInput.jsx";

export default function SquirrelEditCard({renameSquirrel, setIsEdit, selectedName, setSelectedName}) {
    return (
        <div className="squirrel-card squirrel-edit-card">
            <p className="squirrel-card-label">Rename squirrel</p>
            <SelectionInput options={SQUIRREL_NAMES} selectedValue={selectedName} setSelectedValue={setSelectedName}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={renameSquirrel}>Confirm</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => setSelectedName(null)}>Cancel</ActionButton>
            </div>
            <ActionToggle onClick={() => {
                setSelectedName(null);
                setIsEdit(null);}}/>
        </div>
    )
}