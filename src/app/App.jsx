import './styles/App.css'
import RootLayout from "./layout/RootLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PortfolioPage from "../features/portfolio/components/PortfolioPage.jsx";
import SquirrelPage from "../features/squirrel/components/squirrel-page/SquirrelPage.jsx";
import ItemsPage from "../features/squirrel/components/items-page/ItemsPage.jsx";
import {THEMES} from "./Theme-data.js";
import ProjectDetails from "../features/portfolio/components/project-page/ProjectDetails.jsx";
import StashPage from "../features/squirrel/components/stash-page/StashPage.jsx";
import {loadSquirrels, loadStashes, loadStashItems} from "../features/squirrel/api/squirrel-loaders.js";
import SquirrelPageError from "../features/squirrel/components/squirrel-page/SquirrelPageError.jsx";
import StashPageError from "../features/squirrel/components/stash-page/StashPageError.jsx";
import ItemsPageError from "../features/squirrel/components/items-page/ItemsPageError.jsx";
import WordSearchPage from "../features/word-search/pages/WordSearchPage.jsx";

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
            element: <RootLayout theme={THEMES.squirrels}/>,
            id: "squirrels-root",
            loader: loadSquirrels,
            errorElement: <SquirrelPageError/>,
            children: [
                {index: true, element: <SquirrelPage/>},
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
            element: <RootLayout theme={THEMES.squirrels}/>,
            id: "stash-detail",
            loader: loadStashItems,
            errorElement: <ItemsPageError/>,
            children: [
                {index: true, element: <ItemsPage/>},
                {path: "items/:itemId", element: <ItemsPage/>}
            ]
        },
        {
            path: "/projects/:projectId",
            element: <RootLayout theme={THEMES.portfolio}/>,
            children: [
                {index: true, element: <ProjectDetails/>},
            ]
        },
        {
            path: "/word-search",
            element: <RootLayout theme={THEMES["word-search"]}/>,
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
