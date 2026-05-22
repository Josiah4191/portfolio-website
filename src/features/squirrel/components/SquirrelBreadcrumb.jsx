import {NavLink} from "react-router-dom";

export default function SquirrelBreadcrumb({breadcrumb = []}) {
    return (
        <nav className="breadcrumb">
            <ol>
                {breadcrumb.map((crumb, index) => {
                    const isLast = index === breadcrumb.length - 1;
                    return (
                    <>
                        <li key={crumb.label}>
                            {crumb.path ? <NavLink to={crumb.path}>{crumb.label}</NavLink> : crumb.label}
                            {isLast ? null : <span> / </span>}
                        </li>
                    </>)
                })}
            </ol>
        </nav>
    )
}