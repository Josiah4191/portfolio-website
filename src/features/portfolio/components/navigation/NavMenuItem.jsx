import './NavMenuItem.css'

export default function NavMenuItem({title, description, icon, trailingIcon, isExpanded}) {
    const Icon = icon;
    const TrailingIcon = trailingIcon;

    return (
        <div className="nav-menu-item">
            {icon && <Icon className="nav-menu-item-icon" aria-hidden="true" />}

            <div className="nav-menu-item-content">
                <span className="text-nav-link nav-menu-item-title">{title}</span>
                <span className="text-nav-link-subtitle nav-menu-item-description">{description}</span>
            </div>

            {trailingIcon && (
                <div
                    aria-hidden="true"
                    className={`nav-menu-item-trailing-icon ${isExpanded ? "open" : ""}`}>
                    <TrailingIcon/>
                </div>
            )}
        </div>
    )
}