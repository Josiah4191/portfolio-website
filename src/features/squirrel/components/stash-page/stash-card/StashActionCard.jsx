import ActionToggle from "../../ActionToggle.jsx";
import ActionButton from "../../ActionButton.jsx";

export default function StashActionCard({location, deleteStash, setIsEditing, setSelectedLocation}) {
    return (
        <div className="stash-card stash-action-card">
            <p className="stash-card-label">Actions</p>
            <ActionButton variant="action-button-edit" onClick={()=>setSelectedLocation(location)}>Edit</ActionButton>
            <ActionButton variant="action-button-delete" onClick={deleteStash}>Delete</ActionButton>
            <ActionToggle onClick={() => {
                setSelectedLocation(null);
                setIsEditing(false);}}/>
        </div>
    )
}