import './DesktopNavMenu.css';

import NavMenuItem from "../NavMenuItem.jsx";
import {PROJECTS} from "../../../data/projectData.js";
import {ChevronRight, SquareArrowOutUpRight} from "lucide-react";
import {NavLink} from "react-router-dom";

export default function DesktopNavMenu({isOpen, toggleProjectsMenu, isProjectsMenuOpen, closeMenu}) {
    return (
        <div
            id="desktop-nav-menu"
            aria-hidden={!isOpen}
            className={`desktop-nav-menu ${isOpen ? "is-open" : ""}`}>

            <div className="desktop-nav-section">
                <NavLink to="/#about" onClick={closeMenu} className="desktop-nav-link">
                    <NavMenuItem
                        title="About"
                        description="Learn more about me."/>
                </NavLink>
            </div>

            <div className="desktop-nav-divider" aria-hidden="true"/>

            <div className="desktop-nav-section">
                <button
                    type="button"
                    className="desktop-nav-section-button desktop-nav-link"
                    aria-expanded={isProjectsMenuOpen}
                    aria-controls="desktop-projects-submenu"
                    onClick={toggleProjectsMenu}>
                    <NavMenuItem
                        title="All Projects"
                        description="Browse my projects."
                        trailingIcon={ChevronRight}
                        isExpanded={isProjectsMenuOpen}/>
                </button>

                <ul id="desktop-projects-submenu" className={`desktop-nav-submenu ${isProjectsMenuOpen ? "is-open" : ""}`}>
                    {PROJECTS.map(({title, route, navDescription}) => (
                        <li key={route}>
                            <NavLink to={route} onClick={closeMenu} className="desktop-nav-link">
                                <NavMenuItem
                                    title={title}
                                    description={navDescription}/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="desktop-nav-divider" aria-hidden="true"/>

            <div className="desktop-nav-section">
                <a
                    href="/resume"
                    onClick={closeMenu}
                    target="_blank"
                    className="desktop-nav-link"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="Resume"
                        description="View my resume."
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

            <div className="desktop-nav-divider" aria-hidden="true"/>

            <div className="desktop-nav-section">
                <a
                    href="https://www.linkedin.com/in/josiahstoltzfus/"
                    onClick={closeMenu}
                    target="_blank"
                    className="desktop-nav-link"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="LinkedIn"
                        description="Connect with me on LinkedIn."
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

            <div className="desktop-nav-divider" aria-hidden="true"/>

            <div className="desktop-nav-section">
                <a
                    href="https://github.com/josiahstoltzfus"
                    onClick={closeMenu}
                    target="_blank"
                    className="desktop-nav-link"
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