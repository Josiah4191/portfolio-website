import ProjectHero from "../components/project-page/components/hero/ProjectHero.jsx";
import ProjectScreenshotSection from "../components/project-page/components/screenshots/ProjectScreenshotSection.jsx";
import ProjectFeaturesSection from "../components/project-page/components/features/ProjectFeaturesSection.jsx";

export default function ProjectPage({project}) {
    const {
        title,
        description,
        badges,
        links,
        preview,
        screenshots,
        features,
        projectType
    } = project;

    return (
        <div>
            <ProjectHero title={title}
                         description={description}
                         badges={badges}
                         links={links}
                         preview={preview}
                         features={features}
                         projectType={projectType}/>

            <ProjectScreenshotSection screenshots={screenshots}/>

            <ProjectFeaturesSection features={features}/>
        </div>
    )
}