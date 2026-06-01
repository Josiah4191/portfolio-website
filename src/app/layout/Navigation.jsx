import './Navigation.css';
import {useState} from "react";
import {NavLink} from "react-router-dom";
import MenuIcon from "../../icons/MenuIcon.jsx";
import {PROJECTS} from "../../features/portfolio/data/Project-data.js";

export default function Navigation() {
    const [isNavMenuOpen, setisNavMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    function toggleMenu() {
        if (isNavMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu() {
        setisNavMenuOpen(false);
        setIsProjectsOpen(false);
    }

    function openMenu() {
        setisNavMenuOpen(true);
    }

    return (
        <nav className="nav-section">
            <div className={`nav-overlay ${isNavMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>

            <div className="grid page-margin">
                <p className="nav-name"><NavLink to="/">Josiah Stoltzfus</NavLink></p>
                <ul className="nav-group">
                    <li><NavLink to="/#about">About</NavLink></li>
                    <li><NavLink to="/#stack">Stack</NavLink></li>
                    <li className="projects-nav"><NavLink to="/#projects">Projects ▾</NavLink>
                        <ul className="projects-dropdown">
                            {PROJECTS.map((project) => <li key={project.title}><NavLink
                                to={project.route}>{project.title}</NavLink></li>)}
                        </ul>
                    </li>
                    <li><NavLink to="/word-search">Word Search</NavLink></li>
                </ul>
                <div className="nav-menu" onClick={toggleMenu}>
                    <MenuIcon className="nav-menu-icon"/>
                </div>
            </div>

            <div className={`nav-mobile-menu ${isNavMenuOpen ? "open" : ""}`}>
                <ul className="nav-mobile-group" onClick={(e) => e.stopPropagation()}>
                    <li className="nav-mobile-link"><NavLink to="/#about">About</NavLink></li>
                    <li className="nav-mobile-link"><NavLink to="/#stack">Stack</NavLink></li>
                    <li className="nav-mobile-link">
                        <button onClick={() => setIsProjectsOpen(!isProjectsOpen)}>Projects ▾</button>
                        {isProjectsOpen ?
                            <ul className="projects-mobile-dropdown">
                                {PROJECTS.map((project) => <li key={project.title}><NavLink
                                    to={project.route}>{project.title}</NavLink></li>)}
                            </ul> : null}
                    </li>
                    <li className="nav-mobile-link"><NavLink to="/word-search">Word Search</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
