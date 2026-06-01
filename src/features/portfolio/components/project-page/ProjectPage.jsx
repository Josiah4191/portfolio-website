import './ProjectPage.css'
import ProjectLinkCard from "./ProjectLinkCard.jsx";
import ProjectFeatureCard from "./ProjectFeatureCard.jsx";
import ProjectScreenshotCard from "./ProjectScreenshotCard.jsx";
import {useState} from "react";
import ProjectScreenshotModal from "./ProjectScreenshotModal.jsx";

export default function ProjectPage({title, fullDescription, badges, screenshots, features, lessonsLearned, links}) {
    const [selectedScreenshot, setSelectedScreenshot] = useState(null);

    return (
        <div className="project-page-layout">
            <section id="project-hero-section" className="section project-hero-section">
                <div className="grid page-margin">
                    <h1 className="h1 project-section-title">{title}</h1>
                    <p className="project-hero-description">{fullDescription}</p>
                    <div className="project-page-grid project-badge-icons">
                        {badges.map((badge) => <img key={badge.id} src={badge.image} alt={badge.label}/>)}
                    </div>
                    <div className="project-page-grid">
                        {links.map((link) => <ProjectLinkCard {...link}/>)}
                    </div>
                </div>
            </section>
            <hr className="divider"/>
            <section id="project-screenshots-section" className="section">
                <div className="grid page-margin">
                    <h1 className="h1 project-section-title">screenshots</h1>
                    <div className="project-page-grid screenshot-grid">
                        {screenshots.map((screenshot) => <ProjectScreenshotCard key={screenshot.id} {...screenshot}
                                                                                onClick={() => setSelectedScreenshot(screenshot)}/>)}
                    </div>
                    {selectedScreenshot && (<ProjectScreenshotModal {...selectedScreenshot} onClose={() => setSelectedScreenshot(null)}/>)}
                </div>
            </section>
            <hr className="divider"/>
            <section id="project-features-section" className="section">
                <div className="grid page-margin">
                    <h1 className="h1 project-section-title">features</h1>
                    <div className="project-page-grid">
                        {features.map((feature) => <ProjectFeatureCard feature={feature} />)}
                    </div>
                </div>
            </section>
            <hr className="divider"/>
            <section id="project-lessons-learned-section" className="section">
                <div className="grid page-margin">
                    <h1 className="h1 project-section-title">lessons learned</h1>
                    <div className="project-page-grid">
                        {lessonsLearned.map(lesson => <ProjectFeatureCard feature={lesson}/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}