import './HeroIntro.css';

export default function HeroIntro({titleId}) {
    return (
        <div className="hero-intro">
            <p className="type-page-eyebrow">Software Developer</p>
                <h1 id={titleId} className="type-page-title hero-intro-title">
                    Hello.
                    <span className="hero-intro-line">My name is</span>
                    <span className="hero-intro-name">Josiah.</span>
                </h1>

            <div className="section-header-divider" aria-hidden="true"></div>

            <p className="type-page-text hero-intro-description">
                I’m a full-stack web developer who enjoys building clean,
                interactive web applications and learning new technologies.
            </p>

        </div>
    );
}