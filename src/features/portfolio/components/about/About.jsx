import './About.css';
import SectionHeader from "../project-page/SectionHeader.jsx";
import AboutHighlightCard from "./AboutHighlightCard.jsx";
import {AppWindowMac, LucideMonitorSmartphone, Lightbulb} from "lucide-react";
import AboutProfileCard from "./AboutProfileCard.jsx";

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

                    <div className="type-section-text about-description">
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

                <div className="about-profile">
                    <AboutProfileCard/>
                </div>

                <ul className="about-highlights">
                    <li>
                        <AboutHighlightCard
                            title={"Full-stack Development"}
                            description={"Building complete web applications from front to back."}
                            icon={AppWindowMac}/>
                    </li>

                    <li>
                        <AboutHighlightCard
                            title={"Responsive Design"}
                            description={"Creating user-friendly experiences across all devices."}
                            icon={LucideMonitorSmartphone}/>
                    </li>

                    <li>
                        <AboutHighlightCard
                            title={"Always Learning"}
                            description={"Continuously exploring new technologies."}
                            icon={Lightbulb}/>
                    </li>

                </ul>
            </div>
        </section>
    );
}