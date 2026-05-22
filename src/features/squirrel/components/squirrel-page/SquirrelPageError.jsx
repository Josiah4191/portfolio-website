import SquirrelPageLayout from "../SquirrelPageLayout.jsx";
import {THEMES} from "../../../../app/Theme-data.js";
import RootLayout from "../../../../app/layout/RootLayout.jsx";

export default function SquirrelPageError() {
    return (
        <RootLayout theme={THEMES.squirrels}>
            <SquirrelPageLayout
                title="Squirrel Tracker"
                subtitle="Could not connect to squirrel server"
                description="Manage squirrels">
            </SquirrelPageLayout>
        </RootLayout>
    )
}