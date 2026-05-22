import {useState} from "react";
import {STASH_LOCATIONS} from "../../../data/Stash-locations.js";
import {useNavigate} from "react-router-dom";
import empty from "../../../assets/stash-empty.png";
import StashAddFormCard from "./StashAddFormCard.jsx";

export default function StashAddCard({squirrelId}) {

    const [isAdding, setIsAdding] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(STASH_LOCATIONS[0]);
    const navigate = useNavigate();

    async function addStash() {
        await fetch(`http://localhost:8080/squirrels/${squirrelId}/stashes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: selectedLocation,
            })
        });
        setIsAdding(false);
        navigate(`/squirrels/${squirrelId}`, { replace: true });
    }

    return (
        <>
            {isAdding ?
                <StashAddFormCard
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    addStash={addStash}
                    setIsAdding={setIsAdding}/> :
                <div className="stash-card card-interactive" onClick={() => setIsAdding(true)}>
                    <p className="stash-add-label">Add Stash</p>
                    <img src={empty} alt="Empty Stash"/>
                </div>}
        </>
    )
}