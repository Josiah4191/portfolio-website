import SquirrelPageLayout from "../SquirrelPageLayout.jsx";
import {THEMES} from "../../../../app/Theme-data.js";
import RootLayout from "../../../../app/layout/RootLayout.jsx";

export default function ItemsPageError() {
    return (
        <RootLayout theme={THEMES.squirrels}>
            <SquirrelPageLayout
                title="Squirrel Tracker"
                subtitle="Could not load stash items"
                description="Manage items">
            </SquirrelPageLayout>
        </RootLayout>
    )
}