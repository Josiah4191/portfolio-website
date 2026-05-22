import SquirrelCard from "./squirrel-card/SquirrelCard.jsx";
import SquirrelAddCard from "./squirrel-card/SquirrelAddCard.jsx";

export default function SquirrelList({squirrels, isEdit, setIsEdit}) {
    return (
        <div className="card-list">
            {squirrels.map(squirrel =>
                <SquirrelCard
                key={squirrel.id}
                id={squirrel.id}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                name={squirrel.name}/>)}
            <SquirrelAddCard />
        </div>
    );
}