import full from "../../../assets/stash-full.png";
import ActionToggle from "../../ActionToggle.jsx";
import {useNavigate} from "react-router-dom";

export default function StashNormalCard ({id, location, setIsEditing, setSelectedLocation}) {
    const navigate = useNavigate();
    return (
        <div className="stash-card card-interactive" onClick={() => navigate(`/stashes/${id}`)}>
            <p className="stash-card-location">{location}</p>
            <img src={full} alt="Full Stash"/>
            <ActionToggle onClick={() => {
                setIsEditing(true);
                setSelectedLocation(null);
            }}/>
        </div>
    )
}