import './SquirrelPage.css';
import SquirrelList from "./SquirrelList.jsx";
import {useRouteLoaderData} from "react-router-dom";
import {useState} from "react";
import SquirrelPageLayout from "../SquirrelPageLayout.jsx";

export default function SquirrelPage() {
    const [isEditingSquirrelId, setIsEditingSquirrelId] = useState(null);
    const squirrels = useRouteLoaderData("squirrels-root");

    return (
        <SquirrelPageLayout
            title="Squirrel Tracker"
            subtitle="Squirrels"
            description="Manage squirrels">
            <SquirrelList
                isEdit={isEditingSquirrelId}
                setIsEdit={setIsEditingSquirrelId}
                squirrels={squirrels}/>
        </SquirrelPageLayout>
    );
}
