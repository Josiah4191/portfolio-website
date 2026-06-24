import './ProjectPage.css'
import IconLink from "../../../shared/components/IconLink.jsx";
import ProjectFeatureCard from "../components/project-page/ProjectFeatureCard.jsx";
import ProjectScreenshotCard from "../components/project-page/ProjectScreenshotCard.jsx";
import ProjectSection from "./ProjectSection.jsx";
import GalleryCarousel from "../../../shared/components/GalleryCarousel.jsx";

export default function ProjectPage({title, fullDescription, badges, screenshots, features, lessonsLearned, links}) {
    return (
        <div>
            <section className="section project-hero-section">
                <div className="grid page-margin">
                    <h1 className="section-title section-content">{title}</h1>
                    <p className="section-content">{fullDescription}</p>
                    <div className="section-content project-meta">
                        <ul className="project-badge-icons-list" aria-label="Technologies used">
                            {badges.map((badge) =>
                                <li key={badge.id}>
                                    <img src={badge.image} alt={badge.label}/>
                                </li>)}
                        </ul>
                        <ul className="project-links-list" aria-label="Project links">
                            {links.map((link) =>
                                <li key={link.label}>
                                    <IconLink {...link}/>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <ProjectSection title="Screenshots">
                <GalleryCarousel
                    ariaLabel="Project screenshots"
                    className="section-content">
                    {screenshots.map((screenshot) =>
                        <ProjectScreenshotCard
                            key={screenshot.id}
                            {...screenshot}/>)}
                </GalleryCarousel>
            </ProjectSection>

            <ProjectSection title="Features">
                <ul className="section-content project-features-list">
                    {features.map((feature) =>
                        <li key={feature}>
                            <ProjectFeatureCard feature={feature}/>
                        </li>)}
                </ul>
            </ProjectSection>

            {/*
            <ProjectSection title="What I Learned">
                <ul className="section-content project-features-list">
                    {lessonsLearned.map((lesson) =>
                        <li key={lesson}>
                            <ProjectFeatureCard feature={lesson}/>
                        </li>)}
                </ul>
            </ProjectSection>*/}
        </div>
    )
}