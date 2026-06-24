import './Hero.css';
import IconLink from "../../../../shared/components/IconLink.jsx";

export default function Hero() {
    return (
        <section className="section hero-section">
            <div className="grid page-margin">
                <h1 className="section-title section-content">Hello.</h1>
                <p className="hero-name section-content">My name is Josiah.</p>
                <p className="section-content">
                    I’m a full-stack web developer who enjoys building clean,
                    interactive web applications and learning new technologies. This site is a place
                    to share some of my projects, experience, and ways to connect.
                </p>
                <div className="project-links section-content hero-section-links">
                    <IconLink label="GitHub" icon="github" url="https://github.com/josiah4191"/>
                    <IconLink label="LinkedIn" icon="linkedin" url="https://linkedin.com/in/josiahstoltzfus"/>
                    <IconLink label="Resume" icon="resume" url="/Resume.pdf" />
                </div>
            </div>
        </section>
    );
}