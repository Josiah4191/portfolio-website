import './About.css';
import SectionHeader from "../project-page/SectionHeader.jsx";
import {ABOUT_CARDS} from "../../data/aboutData.js";
import AboutCard from "./AboutCard.jsx";

export default function About() {
    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="grid page-margin about-section">

                <div className="about-intro">
                    <SectionHeader
                        eyebrow="ABOUT ME"
                        title="About"
                        titleId="about-title"
                        description="I'm a software developer who enjoys building software and learning new technologies."/>

                    <div className="about-divider" aria-hidden="true"/>

                    <div className="text-section-body about-description">
                        <p>
                            I recently graduated from <span
                            className="about-text-emphasis">Greenville Technical College</span> with an associate degree
                            in Programming and Software Development, and I’ll be pursuing a bachelor’s degree as I continue
                            growing as a software developer.
                        </p>

                        <p>
                            I enjoy building websites and web applications because I like working on both the frontend and the backend.
                            One of my favorite parts of the process is organizing a project and finding ways to make the code cleaner,
                            simpler, and easier to work with.
                        </p>

                        <p>
                            My current focus is <span className="about-text-emphasis">full-stack web development with React, Java, and
                            Spring Boot</span>. I'm looking forward to building more software, taking on real-world projects, and
                            continuing to grow as a developer.
                        </p>


                    </div>
                </div>

                <ul className="about-card-list">
                    {ABOUT_CARDS.map((card) => (
                        <li key={card.title}>
                            <AboutCard {...card} />
                        </li>
                    ))}
                </ul>


            </div>
        </section>
    );
}