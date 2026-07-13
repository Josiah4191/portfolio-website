import RootLayout from "../layouts/RootLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PortfolioPage from "../features/portfolio/pages/PortfolioPage.jsx";
import ProjectDetailsPage from "../features/portfolio/pages/ProjectDetailsPage.jsx";
import WordSearchPage from "../features/games/word-search/pages/WordSearchPage.jsx";
import UnoGamePage from "../features/games/uno/pages/UnoGamePage.jsx";
import GameLayout from "../features/games/GameLayout.jsx";
import ResumeRedirect from "../features/portfolio/pages/ResumeRedirect.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {index: true, element: <PortfolioPage/>},
            ]
        },
        {
            path: "/projects/:projectId",
            element: <RootLayout/>,
            children: [
                {index: true, element: <ProjectDetailsPage/>},
            ]
        },
        {
            path: "/uno",
            element: <GameLayout className="uno-page"/>,
            children: [
                {index: true, element: <UnoGamePage/>},
            ]
        },
        {
            path: "/word-search",
            element: <GameLayout className="word-search-page"/>,
            children: [
                {index: true, element: <WordSearchPage/>},
            ]
        },
        {
            path: "/resume",
            element: <ResumeRedirect/>,
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
