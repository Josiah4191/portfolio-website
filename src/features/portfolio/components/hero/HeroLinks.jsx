import './HeroLinks.css';
import HeroLink from "./HeroLink.jsx";

export default function HeroLinks() {
    return (
        <div className="hero-links">
            <HeroLink label="GitHub" icon="github" url="https://github.com/josiah4191"/>
            <HeroLink label="LinkedIn" icon="linkedin" url="https://linkedin.com/in/josiahstoltzfus"/>
            <HeroLink label="Resume" icon="resume" url="/Resume.pdf" />
        </div>
    )
}