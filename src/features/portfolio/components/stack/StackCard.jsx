import './StackCard.css';

import {TECHNOLOGY_TYPE_STYLES} from "../../data/technologyTypeData.js";

export default function StackCard({badge}) {
    const {label, description, image, type} = badge;
    const style = TECHNOLOGY_TYPE_STYLES[type];

    return (
        <article className="stack-card">
            <div
                style={{
                    backgroundColor: style.background,
                }}
                className="stack-card-image-container">
                <img className="stack-card-image" src={image} alt=""/>
            </div>

            <h3 className="type-card-title">{label}</h3>

            <p className="type-card-body">{description}</p>

            <span
                style={{
                    backgroundColor: style.background,
                    color: style.color,
                }}
                className="type-label stack-card-type">{type}</span>
        </article>
    );
}