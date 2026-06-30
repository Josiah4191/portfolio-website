import './NavMenuItem.css'

export default function NavMenuItem({title, description, icon, trailingIcon, isExpanded}) {
    const Icon = icon;
    const TrailingIcon = trailingIcon;

    return (
        <div className="nav-menu-item">
            {icon &&
                <div className="nav-menu-item-icon" aria-hidden="true">
                    <Icon />
                </div>}

            <div className="nav-menu-item-content">
                <span className="type-nav-link nav-menu-item-title">{title}</span>
                <span className="type-nav-link-subtitle nav-menu-item-description">{description}</span>
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