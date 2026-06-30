import './ProjectFeaturesSection.css'
import SectionHeader from "../../SectionHeader.jsx";
import SectionDivider from "../../../../../../shared/components/SectionDivider.jsx";
import ProjectFeatures from "./ProjectFeatures.jsx";

export default function ProjectFeaturesSection({features}) {
    return (
        <>
            <SectionDivider />
            <section className="section" aria-labelledby="project-features">
                <div className="grid page-margin">

                    <div className="project-features-section-header">
                        <SectionHeader
                            eyebrow={"FEATURES"}
                            title={"Features"}
                            titleId={"project-features"}
                            description={"Here are some of the key features you’ll find in this project."}/>
                    </div>

                    <div className="project-features-section-features-wrapper">
                        <ProjectFeatures features={features}/>
                    </div>

                </div>
            </section>
        </>

    )
}