import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SQUIRREL_NAMES} from "../../../data/Squirrel-names.js";
import SquirrelAddFormCard from "./SquirrelAddFormCard.jsx";
import {API_BASE_URL} from "../../../../../config/api.js";

export default function SquirrelAddCard() {

    const [isAdding, setIsAdding] = useState(false);
    const [selectedName, setSelectedName] = useState(SQUIRREL_NAMES[0]);
    const navigate = useNavigate();

    async function addSquirrel() {
        await fetch(`${API_BASE_URL}/squirrels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: selectedName,
            })
        });
        setIsAdding(false);
        navigate(`/squirrels`, { replace: true });
    }

    return (
        <>
            {isAdding ?
               <SquirrelAddFormCard
                   addSquirrel={addSquirrel}
                   setIsAdding={setIsAdding}
                   selectedName={selectedName}
                   setSelectedName={setSelectedName}/> :
                <div className="squirrel-card" onClick={() => setIsAdding(true)}>
                    <p className="squirrel-card-name">Add Squirrel +</p>
                </div>}
        </>
    )
}