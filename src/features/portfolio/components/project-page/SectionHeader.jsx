import './SectionHeader.css'

export default function SectionHeader({eyebrow, title, titleId, description}) {
    return (
        <header className={`section-header`}>

            <div className="section-header-heading">
                {eyebrow && (
                    <p className="type-page-eyebrow">{eyebrow}</p>
                )}

                <h2 id={titleId} className="type-section-title">{title}</h2>
            </div>

            <div className="section-header-divider" aria-hidden="true"></div>

            {description && (
                <p className="type-section-subtitle section-header-description">{description}</p>
            )}
        </header>
    )
}