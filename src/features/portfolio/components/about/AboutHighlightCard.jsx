import './AboutHighlightCard.css'

export default function AboutHighlightCard({title, description, icon}) {
    const Icon = icon;
    return (
        <article className="about-highlight-card">

            <div className="about-highlight-card-icon-wrapper">
                <Icon className="about-highlight-card-icon" aria-hidden="true"/>
            </div>

            <div className="about-highlight-card-content">
                <h3 className="type-card-subtitle">{title}</h3>
                <p className="type-card-body">{description}</p>
            </div>

        </article>
    )
}