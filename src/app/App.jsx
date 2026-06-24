import RootLayout from "../layouts/RootLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PortfolioPage from "../features/portfolio/pages/PortfolioPage.jsx";
import SquirrelPage from "../features/squirrel/pages/squirrel-page/SquirrelPage.jsx";
import ItemsPage from "../features/squirrel/pages/items-page/ItemsPage.jsx";
import {THEMES} from "../data/themeData.js";
import ProjectDetailsPage from "../features/portfolio/pages/ProjectDetailsPage.jsx";
import StashPage from "../features/squirrel/pages/stash-page/StashPage.jsx";
import {loadSquirrels, loadStashes, loadStashItems} from "../features/squirrel/services/squirrelApi.js";
import SquirrelPageError from "../features/squirrel/pages/squirrel-page/SquirrelPageError.jsx";
import StashPageError from "../features/squirrel/pages/stash-page/StashPageError.jsx";
import ItemsPageError from "../features/squirrel/pages/items-page/ItemsPageError.jsx";
import WordSearchPage from "../features/games/word-search/pages/WordSearchPage.jsx";
import UnoGamePage from "../features/games/uno/pages/UnoGamePage.jsx";
import GameLayout from "../features/games/GameLayout.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout theme={THEMES.portfolio}/>,
            children: [
                {index: true, element: <PortfolioPage/>},
            ]
        },
        {
            path: "/squirrels",
            element: <RootLayout theme={THEMES.squirrel}/>,
            children: [
                {
                    index: true,
                    id: "squirrels-root",
                    element: <SquirrelPage/>,
                    loader: loadSquirrels,
                    errorElement: <SquirrelPageError/>
                },
                {
                    path: ":id",
                    element: <StashPage/>,
                    id: "squirrel-detail",
                    loader: loadStashes,
                    errorElement: <StashPageError/>,
                },
            ]
        },
        {
            path: "/stashes/:id",
            element: <RootLayout theme={THEMES.squirrel}/>,
            children: [
                {
                    index: true,
                    id: "stash-detail",
                    element: <ItemsPage/>,
                    loader: loadStashItems,
                    errorElement: <ItemsPageError/>},
                {path: "items/:itemId", element: <ItemsPage/>}
            ]
        },
        {
            path: "/projects/:projectId",
            element: <RootLayout theme={THEMES.portfolio}/>,
            children: [
                {index: true, element: <ProjectDetailsPage/>},
            ]
        },
        {
            path: "/uno",
            element: <GameLayout theme={THEMES.game}/>,
            children: [
                {index: true, element: <UnoGamePage/>},
            ]
        },
        {
            path: "/word-search",
            element: <GameLayout theme={THEMES.game}/>,
            children: [
                {index: true, element: <WordSearchPage/>},
            ]
        },
    ]
);

function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
