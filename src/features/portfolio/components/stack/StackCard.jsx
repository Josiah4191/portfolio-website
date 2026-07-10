import './StackCard.css';
import {TECHNOLOGY_TYPE_STYLES_MAP} from "../../data/technologyTypeData.js";

export default function StackCard({badge}) {
    const {label, description, image, type} = badge;
    const style = TECHNOLOGY_TYPE_STYLES_MAP[type];

    return (
        <article className="stack-card">
            <img className="stack-card-image" src={image} alt=""/>

            <div className="stack-card-content">
                <h3 className="text-card-title stack-card-title">{label}</h3>

                <p className="text-card-body stack-card-description">{description}</p>
            </div>

            <span
                style={{
                    color: style.color,
                }}
                className="text-label stack-card-type">{type}</span>
        </article>
    );
}