import './ProjectTechnologies.css'
import {TECHNOLOGY_TYPE_STYLES_MAP} from "../../../../data/technologyTypeData.js"

export default function ProjectTechnologies({badges}) {
    return (
        <div className="project-technologies">
            <ul className="project-technologies-badge-list">
                {badges.map((badge) => {
                    const {id, image, type} = badge;
                    const style = TECHNOLOGY_TYPE_STYLES_MAP[type];

                    return (
                        <li
                            style={{
                                color: style.color,
                            }}

                            key={id} className="project-technologies-badge">
                                <img className="project-technologies-badge-icon" src={image} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}