import './MobileNavMenu.css';
import {PROJECTS} from "../../../data/projectData.js";
import {
    ChevronRight,
    SquareArrowOutUpRight, User,
} from "lucide-react";
import NavMenuItem from "../NavMenuItem.jsx";
import {NavLink} from "react-router-dom";

export default function MobileNavMenu({isOpen, toggleProjectsMenu, isProjectsMenuOpen, closeMenu}) {
    return (
        <div
            id="mobile-nav-menu"
            aria-hidden={!isOpen}
            className={`mobile-nav-menu ${isOpen ? "is-open" : ""}`}>

            <button
                type="button"
                className="mobile-nav-grab-handle-button"
                onClick={closeMenu}
                aria-label="Close navigation menu">
                <div className="mobile-nav-grab-handle"/>
            </button>

            <div className="mobile-nav-section">
                <NavLink
                    to="/#about"
                    onClick={closeMenu}
                    className="mobile-nav-link">
                    <NavMenuItem
                        title="About"
                        description="Learn more about me."/>
                </NavLink>
            </div>

            <div className="mobile-nav-divider" aria-hidden="true"/>

            <div className="mobile-nav-section">
                <button
                    type="button"
                    className="mobile-nav-section-button mobile-nav-link"
                    aria-expanded={isProjectsMenuOpen}
                    aria-controls="mobile-projects-submenu"
                    onClick={toggleProjectsMenu}>
                    <NavMenuItem
                        title="All Projects"
                        description="Browse my projects."
                        trailingIcon={ChevronRight}
                        isExpanded={isProjectsMenuOpen}/>
                </button>

                <ul
                    id="mobile-projects-submenu"
                    className={`mobile-nav-submenu ${isProjectsMenuOpen ? "is-open" : ""}`}>
                    {PROJECTS.map(({title, route, navDescription}) => (
                        <li key={route}>
                            <NavLink
                                to={route}
                                className="mobile-nav-link"
                                onClick={closeMenu}>
                                <NavMenuItem
                                    title={title}
                                    description={navDescription}/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mobile-nav-divider" aria-hidden="true"/>

            <div className="mobile-nav-section">
                <a
                    href="/Resume.pdf"
                    onClick={closeMenu}
                    className="mobile-nav-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="Resume"
                        description="View my resume."
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

            <div className="mobile-nav-divider" aria-hidden="true"/>

            <div className="mobile-nav-section">
                <a
                    href="https://www.linkedin.com/in/josiah-stoltzfus/"
                    onClick={closeMenu}
                    target="_blank"
                    className="mobile-nav-link"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="LinkedIn"
                        description="Connect with me on LinkedIn."
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

            <div className="mobile-nav-divider" aria-hidden="true"/>

            <div className="mobile-nav-section">
                <a
                    href="https://github.com/josiahstoltzfus"
                    onClick={closeMenu}
                    target="_blank"
                    className="mobile-nav-link"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="GitHub"
                        description="View my GitHub profile."
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

        </div>
    );
}