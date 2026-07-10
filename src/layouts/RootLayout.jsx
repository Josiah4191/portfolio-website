import './RootLayout.css';
import '../features/portfolio/styles/portfolio.css';
import Navigation from "../features/portfolio/components/navigation/Navigation.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../features/portfolio/components/footer/Footer.jsx";
import ScrollToHash from "../shared/components/ScrollToHash.jsx";
import PageTransition from "../shared/components/PageTransition.jsx";

export default function RootLayout({children}) {
    const location = useLocation();
    return (
        <div className="portfolio-page">
            <ScrollToHash/>

            <header>
                <Navigation/>
            </header>

            <main>
                <PageTransition key={location.pathname}>
                    {children ?? <Outlet/>}
                </PageTransition>
            </main>

            <Footer/>
        </div>
    )
}