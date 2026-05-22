import ActionToggle from "../../ActionToggle.jsx";
import ActionButton from "../../ActionButton.jsx";

export default function SquirrelActionCard({name, deleteSquirrel, setIsEdit, setSelectedName}) {
    return (
        <div className="squirrel-card squirrel-action-card">
            <p className="squirrel-card-label">Actions</p>
            <ActionButton variant="action-button-edit" onClick={()=>setSelectedName(name)}>Edit</ActionButton>
            <ActionButton variant="action-button-delete" onClick={deleteSquirrel}>Delete</ActionButton>
            <ActionToggle onClick={() => {
                setSelectedName(null);
                setIsEdit(null);}}/>
        </div>)
}