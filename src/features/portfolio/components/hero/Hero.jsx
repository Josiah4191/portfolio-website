import './Hero.css';
import HeroIntro from "./HeroIntro.jsx";
import HeroCodeEditor from "./HeroCodeEditor.jsx";
import PortfolioLinks from "../../../../shared/components/PortfolioLinks.jsx";

export default function Hero() {
    const links =
        [
            {
                label: "GitHub",
                url: "https://github.com/josiahstoltzfus"
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/josiahstoltzfus"
            },
            {
                label: "Resume",
                url: "/resume"
            },
        ]

    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="grid page-margin">
                <div className="hero-intro-wrapper">
                    <HeroIntro titleId="hero-title"/>
                </div>

                <div className="hero-code-editor-wrapper">
                    <HeroCodeEditor/>
                </div>

                <div className="hero-links-wrapper">
                    <PortfolioLinks links={links}/>
                </div>
            </div>
        </section>
    );
}