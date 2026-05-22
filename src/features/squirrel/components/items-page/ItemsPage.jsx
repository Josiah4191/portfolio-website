import {useRouteLoaderData} from "react-router-dom";
import './ItemsPage.css';
import ItemCard from "./item-card/ItemCard.jsx";
import ItemAddCard from "./item-card/ItemAddCard.jsx";
import SquirrelList from "../squirrel-page/SquirrelList.jsx";
import SquirrelPageLayout from "../SquirrelPageLayout.jsx";
import ItemsList from "./ItemsList.jsx";

export default function ItemsPage() {
    const data = useRouteLoaderData("stash-detail");
    const items = data.items.content;
    const location = data.stash.location;
    const stashId = data.stash.id;
    const squirrel = data.stash.squirrelResponseDto.name;
    const squirrelId = data.stash.squirrelResponseDto.id;

    return (
        <SquirrelPageLayout
            title={squirrel}
            subtitle="Items"
            description={location}
            breadcrumb={[
            {label: "Squirrels", path: "/squirrels"},
            {label: squirrel, path: `/squirrels/${squirrelId}`},
            {label: location},
        ]}>
            <ItemsList items={items} stashId={stashId}/>
        </SquirrelPageLayout>
    )
}