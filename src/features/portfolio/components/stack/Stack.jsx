import './Stack.css';
import StackCard from "./StackCard.jsx";
import {BADGES} from "../../data/badgeData.js"
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";
import SectionHeader from "../project-page/SectionHeader.jsx";

export default function Stack() {
    return (
        <section className="section" aria-labelledby="stack-title">
            <div className="grid page-margin">

                <div className="stack-section-header">
                    <SectionHeader
                        eyebrow="TECHNOLOGIES"
                        title="My Stack"
                        titleId="stack-title"
                        description="Here are the technologies and tools I use to build modern, responsive, and scalable web applications."/>
                </div>

                <div className="stack-section-carousel">
                    <SlidingCarousel
                        ariaLabel="Tools"
                        trackClass="stack-section-track">
                        {BADGES.map((badge) => <StackCard key={badge.id} badge={badge}/>)}
                    </SlidingCarousel>

                </div>
            </div>
        </section>
    )
}