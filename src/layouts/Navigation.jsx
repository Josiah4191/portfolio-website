import './Navigation.css';
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {PROJECTS} from "../features/portfolio/data/projectData.js";

export default function Navigation() {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    function toggleMenu() {
        if (isNavMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu() {
        setIsNavMenuOpen(false);
        setIsProjectsOpen(false);
    }

    function openMenu() {
        setIsNavMenuOpen(true);
    }

    return (
        <nav className="nav-section">
            <div
                className={`nav-overlay ${isNavMenuOpen ? "open" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <div className="grid nav-page-margin">
                <p className="nav-name"><NavLink to="/">Josiah Stoltzfus</NavLink></p>
                <ul className="nav-group">
                    <li><NavLink to="/#about">About</NavLink></li>
                    <li className="projects-nav"><NavLink to="/#projects">Projects ▾</NavLink>
                        <ul className="projects-dropdown">
                            {PROJECTS.map((project) =>
                                <li key={project.title}>
                                    <NavLink
                                        to={project.route}>
                                        {project.title}
                                    </NavLink>
                                </li>)}
                        </ul>
                    </li>
                </ul>
                <button
                    type="button"
                    className="nav-menu"
                    onClick={toggleMenu}
                    aria-label={isNavMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isNavMenuOpen}>
                    ☰
                </button>
            </div>

            <div className={`nav-mobile-menu ${isNavMenuOpen ? "open" : ""}`}>
                <ul className="nav-mobile-group" onClick={(e) => e.stopPropagation()}>
                    <li className="nav-mobile-link"><NavLink to="/#about" onClick={closeMenu}>About</NavLink></li>
                    <li className="nav-mobile-link">
                        <button
                            type="button"
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            aria-expanded={isProjectsOpen}>
                            Projects ▾
                        </button>
                        {isProjectsOpen ?
                            <ul className="projects-mobile-dropdown">
                                {PROJECTS.map((project) =>
                                    <li key={project.title}>
                                        <NavLink
                                            to={project.route}
                                            onClick={closeMenu}>
                                            {project.title}
                                        </NavLink>
                                    </li>)}
                            </ul> : null}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
