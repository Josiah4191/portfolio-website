import { useEffect } from "react";

export default function ResumeRedirect() {
    useEffect(() => {
        window.location.replace("/josiah-stoltzfus-resume.pdf");
    }, []);

    return <p>Opening resume</p>;
}