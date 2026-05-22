import './Hero.css';
import ProjectLinkCard from "../project-page/ProjectLinkCard.jsx";

export default function Hero() {
    return (
        <section id="hero" className="section hero-section">
            <div className="grid page-margin">
                <h1 className="h1 hero-title">hello</h1>
                <h2 className="h3 hero-description">My name is Josiah.</h2>
                <p className="hero-intro">I’m a full-stack web developer who enjoys building clean,
                    interactive web applications and learning new technologies. This site is a place
                    to share some of my projects, experience, and ways to connect.</p>
                <div className="project-page-grid">
                    <ProjectLinkCard label="GitHub" url="https://github.com/josiah4191"/>
                    <ProjectLinkCard label="LinkedIn" url="https://linkedin.com/in/josiahstoltzfus"/>
                    <ProjectLinkCard label="Resume" url="/Resume.pdf" />
                </div>
            </div>
        </section>
    );
}