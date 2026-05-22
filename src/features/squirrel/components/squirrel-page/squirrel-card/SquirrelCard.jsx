import './SquirrelCard.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import SquirrelNormalCard from "./SquirrelNormalCard.jsx";
import SquirrelActionCard from "./SquirrelActionCard.jsx";
import SquirrelEditCard from "./SquirrelEditCard.jsx";

export default function SquirrelCard({id, name, isEdit, setIsEdit}) {
    const navigate = useNavigate();
    const isEditing = isEdit === id;
    const [selectedName, setSelectedName] = useState(null);

    async function deleteSquirrel() {
        if (!window.confirm("Delete this squirrel?")) {
            return;
        }
        await fetch(`http://localhost:8080/squirrels/${id}`, {
            method: 'DELETE'
        });
        navigate(`/squirrels`, { replace: true });
    }

    async function renameSquirrel() {
        await fetch(`http://localhost:8080/squirrels/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: selectedName})
        })
        navigate(`/squirrels`, { replace: true });
        setSelectedName(null);
        setIsEdit(null);
    }

    return (
        <>
            {isEditing ? (selectedName ?
                    <SquirrelEditCard
                        renameSquirrel={renameSquirrel}
                        setIsEdit={setIsEdit}
                        selectedName={selectedName}
                        setSelectedName={setSelectedName}/> :
                    <SquirrelActionCard
                        name={name}
                        deleteSquirrel={deleteSquirrel}
                        setIsEdit={setIsEdit}
                        setSelectedName={setSelectedName}/>) :
                <SquirrelNormalCard
                    id={id}
                    name={name}
                    setIsEdit={setIsEdit}
                    navigate={navigate}/>
            }
        </>
    );
}