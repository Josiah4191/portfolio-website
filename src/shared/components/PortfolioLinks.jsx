import './PortfolioLinks.css'
import {ArrowUpRight} from "lucide-react";

export default function PortfolioLinks({links}) {
    return (
        <div className="portfolio-links">
            <ul className="portfolio-links-list">
                {links.map((link) => {
                    const {label, url} = link;

                    return (
                        <li
                            className="portfolio-link-item"
                            key={label}>
                            <a
                                target={"_blank"}
                                rel="noopener noreferrer"
                                className="type-link portfolio-link"
                                href={url}>
                                {label}
                                <ArrowUpRight className="portfolio-link-icon" aria-hidden="true"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}