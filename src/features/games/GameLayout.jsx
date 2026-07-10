import {Outlet} from "react-router-dom";
import './GameLayout.css';
import PageTransition from "../../shared/components/PageTransition.jsx";

export default function GameLayout({className = ""}) {
    return (
        <div className={`game-layout ${className}`}>
            <PageTransition>
                <Outlet/>
                <div id="uno-modal-root"></div>
            </PageTransition>
        </div>
    );
}