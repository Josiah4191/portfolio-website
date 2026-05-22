import StashCard from "./stash-card/StashCard.jsx";
import StashAddCard from "./stash-card/StashAddCard.jsx";

export default function StashList({stashes, squirrelId}) {
    return (
        <div className="card-list">
            {stashes.map(stash => <StashCard id={stash.id} squirrelId={squirrelId} location={stash.location}/>)}
            <StashAddCard squirrelId={squirrelId}/>
        </div>
    );
}