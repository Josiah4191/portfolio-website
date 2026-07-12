import './ProjectScreenshotSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel.jsx";
import SectionDivider from "../../../../../../shared/components/SectionDivider.jsx";

export default function ProjectScreenshotSection({screenshots}) {
    return (
        <>
            <SectionDivider/>

            <section className="section project-screenshot-section" id="project-screenshots">
                <div className="grid">

                    <div className="page-margin project-screenshot-section-header">
                        <SectionHeader
                            eyebrow={"SCREENSHOTS"}
                            title={"Screenshots"}
                            titleId={"project-screenshots"}
                            variant="dark"
                            description={"Here are a few screenshots from the project."}/>
                    </div>

                    <div className="page-margin project-screenshot-section-carousel-wrapper">
                        <ProjectScreenshotCarousel screenshots={screenshots}/>
                    </div>

                </div>
            </section>
        </>

    )
}