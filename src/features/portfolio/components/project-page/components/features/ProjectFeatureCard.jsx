import './ProjectFeatureCard.css'

export default function ProjectFeatureCard({title, description, icon}) {
    const Icon = icon;

    return (
        <article className="project-feature-card">
            <div className="project-feature-card-icon-wrapper">
                <Icon className="project-feature-card-icon" aria-hidden="true"/>
            </div>

            <div className="project-feature-card-content">
                <h3 className="type-card-title project-feature-card-title">
                    {title}
                </h3>

                <p className="type-section-text project-feature-card-description">
                    {description}
                </p>
            </div>
        </article>
    )
}