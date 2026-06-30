import './HeroLink.css'
import {LINK_ICONS} from "../../data/linkData.jsx";
import {SquareArrowOutUpRight} from "lucide-react";

export default function HeroLink({icon, label, url}) {
    const Icon = LINK_ICONS[icon];

    return (
        <a target={"_blank"} rel="noopener noreferrer" href={url} className="hero-link">
            <Icon className="hero-link-icon" aria-hidden="true"/>
            <span className="type-button hero-link-label">{label}</span>
            <SquareArrowOutUpRight aria-hidden="true"/>
        </a>
    )
}