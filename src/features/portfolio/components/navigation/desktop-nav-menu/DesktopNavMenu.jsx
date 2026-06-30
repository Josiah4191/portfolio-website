// noinspection DuplicatedCode
import './DesktopNavMenu.css';

import NavMenuItem from "../NavMenuItem.jsx";
import {PROJECTS} from "../../../data/projectData.js";
import {Folder, FileText, User, ChevronRight, SquareArrowOutUpRight} from "lucide-react";
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
                        description="Learn more about me."
                        icon={User}
                        trailingIcon={ChevronRight}/>
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
                        icon={Folder}
                        trailingIcon={ChevronRight}
                        isExpanded={isProjectsMenuOpen}/>
                </button>

                <ul id="desktop-projects-submenu" className={`desktop-nav-submenu ${isProjectsMenuOpen ? "is-open" : ""}`}>
                    {PROJECTS.map(({title, route, navDescription, navIcon}) => (
                        <li key={route}>
                            <NavLink to={route} onClick={closeMenu} className="desktop-nav-link">
                                <NavMenuItem
                                    title={title}
                                    description={navDescription}
                                    icon={navIcon}
                                    trailingIcon={ChevronRight}/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="desktop-nav-divider" aria-hidden="true"/>

            <div className="desktop-nav-section">
                <a
                    href="/Resume.pdf"
                    onClick={closeMenu}
                    target="_blank"
                    className="desktop-nav-link"
                    rel="noopener noreferrer">
                    <NavMenuItem
                        title="Resume"
                        description="View my resume."
                        icon={FileText}
                        trailingIcon={SquareArrowOutUpRight}/>
                </a>
            </div>

        </div>
    );
}