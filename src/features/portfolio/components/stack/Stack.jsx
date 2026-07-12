import './Stack.css';
import StackCard from "./StackCard.jsx";
import {BADGES} from "../../data/badgeData.js"
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";
import SectionHeader from "../project-page/SectionHeader.jsx";
import PortfolioCarouselButton from "../../../../shared/components/PortfolioCarouselButton.jsx";

export default function Stack() {
    return (
        <section className="section stack-section" aria-labelledby="stack-title">
            <div className="grid page-margin">

                <div className="stack-section-header">
                    <SectionHeader
                        eyebrow="TECHNOLOGIES"
                        title="My Stack"
                        titleId="stack-title"
                        variant="dark"
                        description="Here are some of the technologies I've used while building software."/>
                </div>

                <div className="stack-section-carousel">
                    <SlidingCarousel
                        ariaLabel="Tools"
                        ButtonComponent={PortfolioCarouselButton}
                        trackClass="stack-section-track">
                        {BADGES.map((badge) => <StackCard key={badge.id} badge={badge}/>)}
                    </SlidingCarousel>

                </div>
            </div>
        </section>
    )
}