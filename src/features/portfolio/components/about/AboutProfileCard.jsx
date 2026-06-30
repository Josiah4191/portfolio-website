import './AboutProfileCard.css'
import AboutProfileItem from "./AboutProfileItem.jsx";
import {GraduationCap, CodeXml, Rocket} from "lucide-react";

const education = [
    "Associate Degree in Programming",
    "Greenville Technical College"
]

const focus = [
    "Full Stack Web Development",
    "Responsive Web Applications",
]

const whatIDo = [
    "Build practical applications",
    "Explore new technologies",
    "Solve real-world problems"
]

export default function AboutProfileCard() {
    return (
        <div className="about-profile-card">

            <ul className="about-profile-list">
                <AboutProfileItem title="Education" details={education} icon={GraduationCap}/>
                <AboutProfileItem title="Focus" details={focus} icon={CodeXml}/>
                <AboutProfileItem title="What I Do" details={whatIDo} icon={Rocket}/>
            </ul>

        </div>
    )

}