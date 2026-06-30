import RootLayout from "../layouts/RootLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PortfolioPage from "../features/portfolio/pages/PortfolioPage.jsx";
import {THEMES} from "../data/themeData.js";
import ProjectDetailsPage from "../features/portfolio/pages/ProjectDetailsPage.jsx";
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
