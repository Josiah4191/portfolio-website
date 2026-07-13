import './ResumeRedirect.css';
import '../styles/colors.css';
import {useEffect} from "react";

export default function ResumeRedirect() {

    useEffect(() => {
        window.location.replace("/josiah-stoltzfus-resume.pdf");
    }, []);

    return (
        <div className="portfolio-page resume-redirect">
            <p>
                Opening resume...
            </p>
        </div>
    );
}