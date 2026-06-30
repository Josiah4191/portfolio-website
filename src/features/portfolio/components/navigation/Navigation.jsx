import './Navigation.css';
import {useState} from "react";
import {NavLink} from "react-router-dom";

import {Menu} from "lucide-react";
import DesktopNavMenu from "./desktop-nav-menu/DesktopNavMenu.jsx";
import MobileNavMenu from "./mobile-nav-menu/MobileNavMenu.jsx";

export default function Navigation() {
    const [openMenu, setOpenMenu] = useState(null);
    const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

    const isDesktopNavMenuOpen = openMenu === "desktop";
    const isMobileNavMenuOpen = openMenu === "mobile";

    function toggleMenu(menu) {
        setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu));
    }
1
    function toggleProjectsMenu() {
        setIsProjectsMenuOpen((isOpen) => !isOpen);
    }

    function closeMenu() {
        setOpenMenu(null);
        setIsProjectsMenuOpen(false);
    }

    return (
        <nav className="nav-section" aria-label="Main navigation">
            <div
                className={`nav-overlay ${(isMobileNavMenuOpen || isDesktopNavMenuOpen) ? "open" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <div className="grid nav-page-margin">

                <div className="nav-container">
                    <NavLink to="/" className="nav-brand">
                        <div className="nav-logo-mark"><span>J</span></div>
                        <span className="type-nav-logo nav-name-full">Josiah Stoltzfus</span>
                        <div className="nav-divider" aria-hidden="true"/>
                        <span className="type-nav-subtitle nav-subtitle">Software Developer</span>
                    </NavLink>

                    <div className="nav-menu-button-desktop-container">
                        <button
                            type="button"
                            onClick={() => toggleMenu("desktop")}
                            className="nav-menu-button"
                            aria-label={isDesktopNavMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isDesktopNavMenuOpen}
                            aria-controls="desktop-nav-menu">
                            <Menu strokeWidth={2.2} aria-hidden="true"/>
                        </button>
                        <DesktopNavMenu
                            isProjectsMenuOpen={isProjectsMenuOpen}
                            toggleProjectsMenu={toggleProjectsMenu}
                            isOpen={isDesktopNavMenuOpen}
                            closeMenu={closeMenu}/>
                    </div>

                    <button
                        type="button"
                        className="nav-menu-button nav-menu-button-mobile"
                        onClick={() => toggleMenu("mobile")}
                        aria-label={isMobileNavMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMobileNavMenuOpen}
                        aria-controls="mobile-nav-menu">
                        <Menu strokeWidth={2.2} aria-hidden="true"/>
                    </button>
                </div>

                <MobileNavMenu
                    toggleProjectsMenu={toggleProjectsMenu}
                    isProjectsMenuOpen={isProjectsMenuOpen}
                    isOpen={isMobileNavMenuOpen}
                    closeMenu={closeMenu}/>
            </div>

        </nav>
    );
}
