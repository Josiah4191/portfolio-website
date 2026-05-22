import {useEffect} from "react";

export default function ProjectScreenshotModal({id, image, alt, description, onClose}) {
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }
            window.addEventListener("keydown", handleEscapeKey);
            return () => window.removeEventListener("keydown", handleEscapeKey);
    }, [onClose]);

    return (
        <div className="project-screenshot-overlay" onClick={onClose}>
            <div className="project-screenshot-modal" onClick={(e) => e.stopPropagation()}>
                <img src={image} alt={alt}/>
                <p>{description}</p>
            </div>
        </div>
    )
}