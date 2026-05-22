import {STASH_LOCATIONS} from "../../../data/Stash-locations.js";
import SelectionInput from "../../SelectionInput.jsx";
import ActionButton from "../../ActionButton.jsx";

export default function StashAddFormCard({selectedLocation, addStash, setIsAdding, setSelectedLocation}) {
    return (
        <div className="stash-card stash-edit-card">
            <p className="stash-card-label">Location</p>
            <SelectionInput options={STASH_LOCATIONS} selectedValue={selectedLocation} setSelectedValue={setSelectedLocation}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={addStash}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => setIsAdding(false)}>Cancel</ActionButton>
            </div>
        </div>
    )
}