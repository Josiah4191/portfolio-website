import './ProjectScreenshotSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel.jsx";
import SectionDivider from "../../../../../../shared/components/SectionDivider.jsx";

export default function ProjectScreenshotSection({screenshots}) {
    return (
        <>
            <SectionDivider/>

            <section className="section" id="project-screenshots">
                <div className="grid">

                    <div className="page-margin project-screenshot-section-header">
                        <SectionHeader
                            eyebrow={"SCREENSHOTS"}
                            title={"Screenshots"}
                            titleId={"project-screenshots"}
                            description={"Take a look at some key views and features from my projects."}/>
                    </div>

                    <div className="page-margin project-screenshot-section-carousel-wrapper">
                        <ProjectScreenshotCarousel screenshots={screenshots}/>
                    </div>

                </div>
            </section>
        </>

    )
}