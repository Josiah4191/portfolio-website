import './AboutProfileItem.css'

export default function AboutProfileItem({title, details, icon}) {
    const Icon = icon;
    return (
        <li className="about-profile-item">
            <div className="about-profile-item-icon-wrapper">
                <Icon className="about-profile-item-icon" aria-hidden="true"/>
            </div>

            <div>
                <h3 className="type-card-subtitle">{title}</h3>
                <ul className="type-card-body">
                    {details.map((detail) =>
                        <li
                            className="about-profile-item-detail"
                            key={detail}>
                                {detail}
                        </li>
                    )}
                </ul>
            </div>

        </li>
    )
}