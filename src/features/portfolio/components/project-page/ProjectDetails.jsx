import ProjectPage from "./ProjectPage.jsx";
import {useParams} from "react-router-dom";
import {PROJECTS} from "../../data/Project-data.js";

export default function ProjectDetails() {
    const {projectId} = useParams();
    const project = PROJECTS.find(p => p.slug === projectId);

    if (!project) {
        return <p>Project not found.</p>;
    }

    return(
            <>
                <ProjectPage {...project}/>
            </>
        )
}