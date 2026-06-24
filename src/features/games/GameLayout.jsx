import {Outlet} from "react-router-dom";
import './GameLayout.css';
import {useEffect} from "react";
import {THEMES} from "../../data/themeData.js";
import PageTransition from "../../shared/components/PageTransition.jsx";

export default function GameLayout({theme}) {

    useEffect(() => {
        if (!theme) return;

        document.body.classList.remove(
            THEMES.portfolio,
            THEMES.squirrel,
            THEMES.game);

        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        }
    }, [theme])

    return (
        <div className="game-layout">
            <PageTransition>
                <Outlet/>
            </PageTransition>
        </div>
    );
}