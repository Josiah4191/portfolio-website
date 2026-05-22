import Navigation from "./Navigation.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../features/portfolio/components/footer/Footer.jsx";
import ScrollToHash from "./ScrollToHash.jsx";

export default function RootLayout({theme, children}) {

    return (
        <div className={theme}>
            <ScrollToHash/>
            <header>
                <Navigation/>
            </header>
            <main>
                {children ? children : <Outlet/>}
            </main>
            <Footer/>
        </div>
    )
}