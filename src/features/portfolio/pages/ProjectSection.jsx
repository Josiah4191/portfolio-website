export default function ProjectSection({title, children}) {
    return (
        <>
            <hr className="section-divider" aria-hidden="true"/>

            <section className="section">
                <div className="grid page-margin">
                    <h2 className="section-title section-content">{title}</h2>
                    {children}
                </div>
            </section>
        </>
    )
}