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
                        description="I'm a passionate developer who loves building practical, user-friendly web applications."/>

                    <div className="about-divider" aria-hidden="true"/>

                    <div className="text-section-body about-description">
                        <p>
                            I recently graduated from <span
                            className="about-text-emphasis">Greenville Technical College</span> with an associate degree
                            in Programming and Software Development, and I’ll be <span className="about-text-emphasis">pursuing a bachelor’s degree
                            </span> as I continue
                            growing as a software developer.
                        </p>

                        <p>
                            I’ve developed a <span
                            className="about-text-emphasis">genuine passion for web development</span> and enjoy the
                            entire process of
                            building modern web applications—from designing intuitive user interfaces to developing the
                            backend systems that power them. I enjoy creating clean, maintainable software and
                            continuously refining both my technical skills and the user experience.
                        </p>

                        <p>
                            My current focus is <span className="about-text-emphasis">full-stack web development with React, Java, and Spring Boot</span>. Through personal projects, I’m continuing to strengthen my understanding of software architecture, problem solving, and building applications that are both practical and enjoyable to use.
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