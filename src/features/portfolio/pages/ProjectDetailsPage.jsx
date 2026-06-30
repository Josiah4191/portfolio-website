import ProjectPage from "./ProjectPage.jsx";
import {useParams} from "react-router-dom";
import {PROJECTS} from "../data/projectData.js";

export default function ProjectDetailsPage() {
    const {projectId} = useParams();
    const project = PROJECTS.find(p => p.slug === projectId);

    if (!project) {
        return (
            <section className="section">
                <div className="grid page-margin">
                    <h1 className="section-title section-content">Project not found</h1>
                    <p className="section-content">The requested project could not be found.</p>
                </div>
            </section>
        );
    }

    return (
        <ProjectPage project={project}/>
    )
}