import './AboutProfileItem.css'

export default function AboutProfileItem({title, details, icon}) {
    const Icon = icon;
    return (
        <li className="about-profile-item">
            <div className="about-profile-item-icon-wrapper">
                <Icon className="about-profile-item-icon" aria-hidden="true"/>
            </div>

            <div>
                <h3 className="text-card-subtitle">{title}</h3>
                <ul>
                    {details.map((detail) =>
                        <li
                            className="text-card-body about-profile-item"
                            key={detail}>
                                {detail}
                        </li>
                    )}
                </ul>
            </div>

        </li>
    )
}