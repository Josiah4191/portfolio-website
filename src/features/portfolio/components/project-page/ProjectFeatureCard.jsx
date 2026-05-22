import './ProjectPage.css';

export default function ProjectFeatureCard({feature}) {
    return (
        <div className="project-feature-card">
            <p className="project-feature">✓ {feature}</p>
        </div>
    )
}