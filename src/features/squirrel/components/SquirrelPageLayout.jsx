import './SquirrelPageLayout.css'
import SquirrelBreadcrumb from "./SquirrelBreadcrumb.jsx";

export default function SquirrelPageLayout({title, subtitle, description, children, breadcrumb}) {
    return (
        <div className="section">
            <div className="grid page-margin">
                <SquirrelBreadcrumb breadcrumb={breadcrumb}/>
                <div className="squirrel-page-header">
                    <h1 className="squirrel-page-title">{title}</h1>
                    <h1 className="squirrel-page-description">{description}</h1>
                </div>
                <h2 className="squirrel-section-title">{subtitle}</h2>
                {children}
            </div>
        </div>
    )
}