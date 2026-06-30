import './Hero.css';
import HeroIntro from "./HeroIntro.jsx";
import HeroCodeEditor from "./HeroCodeEditor.jsx";
import HeroLinks from "./HeroLinks.jsx";

export default function Hero() {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="grid page-margin">

                <div className="hero-intro-wrapper">
                    <HeroIntro titleId="hero-title"/>
                </div>

                <div className="hero-links-wrapper">
                    <HeroLinks/>
                </div>

                <div className="hero-code-editor-wrapper">
                    <HeroCodeEditor/>
                </div>
            </div>
        </section>
    );
}