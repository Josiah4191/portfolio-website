import './SectionHeader.css'

export default function SectionHeader({eyebrow, title, titleId, description, variant = "light"}) {
    return (
        <header className={`section-header`}>

            <div className="section-header-heading">
                {eyebrow && (
                    <p className={`text-page-eyebrow section-eyebrow-${variant}`}>{eyebrow}</p>
                )}

                <h2 id={titleId} className={`text-section-title section-${variant}`}>{title}</h2>
            </div>

            <div className="section-header-divider" aria-hidden="true"></div>

            {description && (
                <p className={`text-section-subtitle section-header-description section-${variant}`}>{description}</p>
            )}
        </header>
    )
}