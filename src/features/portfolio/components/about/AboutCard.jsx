import "./AboutCard.css";

export default function AboutCard({title, description, items, icon}) {
    const Icon = icon;
    return (
        <article className="about-card">
            <Icon className="about-card-icon" aria-hidden="true"/>

            <div className="about-card-content">
                <h3 className="text-card-subtitle">{title}</h3>

                {items ? (
                    <ul className="about-card-item-list">
                        {items.map((item) =>
                            <li
                                key={item}
                                className="text-card-body about-card-item">
                                {item}
                            </li>
                        )}
                    </ul>
                ) : <p className="text-card-body about-card-description">{description}</p>}

            </div>

        </article>
    )
}