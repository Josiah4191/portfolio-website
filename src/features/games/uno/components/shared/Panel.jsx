import "./Panel.css";
import {forwardRef} from "react";

const Panel =
    forwardRef(function Panel({children, className = "", ...props}, ref) {
        return (
            <div
                ref={ref}
                className={`panel ${className}`}
                {...props}>
                {children}
            </div>
        )
    });

export default Panel;