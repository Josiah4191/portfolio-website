import './ProjectQuickLinks.css'
import {Link, SquareArrowOutUpRight} from "lucide-react";

export default function ProjectQuickLinks({links}) {
    return (
        <div className="project-quick-links">
            <header className="project-quick-links-header">
                <div className="project-quick-links-icon-wrapper">
                    <Link className="project-hero-links-icon" aria-hidden="true"/>
                </div>
                <h3 className="type-card-title">Quick Links</h3>
            </header>

            <div className="project-quick-links-divider" aria-hidden="true"></div>

            <ul className="project-quick-links-list">
                {links.map((link) => {
                    const {label, icon, url} = link;
                    const Icon = icon;

                    return (
                        <li key={label}>
                            <a
                                target={"_blank"}
                                rel="noopener noreferrer"
                                className="type-button project-quick-link"
                                href={url}>
                                <Icon className="project-quick-link-icon" aria-hidden="true"/>
                                {label}
                                <SquareArrowOutUpRight className="project-quick-link-arrow-icon" aria-hidden="true"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}