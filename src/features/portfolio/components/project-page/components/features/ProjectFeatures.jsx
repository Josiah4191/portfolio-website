import './ProjectFeatures.css'
import ProjectFeatureCard from "./ProjectFeatureCard.jsx";

export default function ProjectFeatures({features}) {
    return (
        <ul className="project-features-list">
            {features.map((feature) =>
                <li key={feature.title}>
                    <ProjectFeatureCard
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}/>
                </li>)}
        </ul>
    )
}