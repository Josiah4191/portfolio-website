import ActionToggle from "../../ActionToggle.jsx";

export default function SquirrelNormalCard({setIsEdit, navigate, id, name}) {
    return (
        <div className="squirrel-card card-interactive" onClick={() => navigate(`/squirrels/${id}`)}>
            <p className="squirrel-card-name">{name}</p>
            <ActionToggle onClick={() => setIsEdit(id)}/>
        </div>
    )
}