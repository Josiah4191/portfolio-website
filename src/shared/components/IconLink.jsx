import './IconLink.css'
import {LINK_ICONS} from "../../features/portfolio/data/linkData.jsx";

export default function IconLink({icon, label, url}) {
    const iconComponent = LINK_ICONS[icon];

    return (
        <a target={"_blank"} rel="noopener noreferrer" href={url} className="icon-link">
            <span aria-hidden="true">{iconComponent}</span>
            {label}
        </a>
    )
}