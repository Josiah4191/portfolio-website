import './RootLayout.css';
import Navigation from "../features/portfolio/components/navigation/Navigation.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../features/portfolio/components/footer/Footer.jsx";
import ScrollToHash from "../shared/components/ScrollToHash.jsx";
import {useEffect} from "react";
import {THEMES} from "../data/themeData.js";
import PageTransition from "../shared/components/PageTransition.jsx";

export default function RootLayout({theme, children}) {

    const location = useLocation();

    useEffect(() => {
        if (!theme) return;

        document.body.classList.remove(
            THEMES.portfolio,
            THEMES.game);

        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        }
    }, [theme]);

    return (
        <div>
            <ScrollToHash/>

            <header className="site-header">
                <Navigation/>
            </header>

            <main className="site-main">
                <PageTransition key={location.pathname}>
                    {children ?? <Outlet/>}
                </PageTransition>
            </main>

            <Footer/>
        </div>
    )
}