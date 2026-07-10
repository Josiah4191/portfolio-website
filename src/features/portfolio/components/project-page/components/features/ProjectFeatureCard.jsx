import './ProjectFeatureCard.css'

export default function ProjectFeatureCard({title, description, icon}) {
    const Icon = icon;

    return (
        <article className="project-feature-card">
            <Icon className="project-feature-card-icon" aria-hidden="true"/>

            <div className="project-feature-card-content">
                <h3 className="text-card-subtitle project-feature-card-title">
                    {title}
                </h3>

                <p className="text-card-body project-feature-card-description">
                    {description}
                </p>
            </div>
        </article>
    )
}