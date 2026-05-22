import './StashCard.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StashNormalCard from "./StashNormalCard.jsx";
import StashActionCard from "./StashActionCard.jsx";
import StashEditCard from "./StashEditCard.jsx";

export default function StashCard({id, location, squirrelId}) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(location);

    async function deleteStash() {
        if (!window.confirm("Delete this stash?")) {
            return;
        }

        await fetch(`http://localhost:8080/stashes/${id}`, {
            method: 'DELETE'
        })

        navigate(`/squirrels/${squirrelId}`, { replace: true });
        setSelectedLocation(null);
        setIsEditing(null);
    }

    async function changeLocation() {
        await fetch(`http://localhost:8080/stashes/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({location: selectedLocation})
        })
        navigate(`/squirrels/${squirrelId}`, { replace: true });
        setSelectedLocation(null);
        setIsEditing(null);
    }

    return (
        <>
            {isEditing ? (selectedLocation ?
                    <StashEditCard
                        changeLocation={changeLocation}
                        setIsEditing={setIsEditing}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}/> :
                    <StashActionCard
                        location={location}
                        deleteStash={deleteStash}
                        setIsEditing={setIsEditing}
                        setSelectedLocation={setSelectedLocation}/>) :
                <StashNormalCard
                    id={id}
                    location={location}
                    setIsEditing={setIsEditing}
                    setSelectedLocation={setSelectedLocation}/>
            }
        </>

    )
}