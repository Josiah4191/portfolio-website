import './ProjectTechnologies.css'
import {Network} from "lucide-react";
import {TECHNOLOGY_TYPE_STYLES} from "../../../../../data/technologyTypeData.js"

export default function ProjectTechnologies({badges}) {
    return (
        <div className="project-technologies">

            <header className="project-technologies-header">
                <div className="project-technologies-icon-wrapper">
                    <Network className="project-hero-technologies-icon" aria-hidden="true"/>
                </div>
                <h3 className="type-card-title">Technologies</h3>
            </header>

            <div className="project-quick-links-divider" aria-hidden="true"></div>

            <ul className="project-technologies-badge-list">
                {badges.map((badge) => {
                    const {id, image, label, type} = badge;
                    const style = TECHNOLOGY_TYPE_STYLES[type];

                    return (
                        <li
                            style={{
                                backgroundColor: style.background,
                                color: style.color,
                            }}

                            key={id} className="project-technologies-badge">
                            <div className="project-technologies-badge-wrapper" aria-hidden="true">
                                <img src={image} alt=""/>
                            </div>
                            <span className="type-badge">{label}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}