import './Stack.css';
import StackCard from "./StackCard.jsx";
import {BADGES} from "../../data/badgeData.js"
import SlidingCarousel from "../../../../shared/components/SlidingCarousel.jsx";

export default function Stack() {
    return (
        <section id="stack" className="section">
            <div className="grid page-margin">
                <h2 className="section-title section-content">Stack</h2>
                {/*<p className="section-content">These are some of the technologies and tools I use when building web
                    applications and software projects.</p>*/}
                <SlidingCarousel
                    variant="carousel-card"
                    ariaLabel="Tools"
                    className="section-content">
                    {BADGES.map((badge) =>
                        <li key={badge.id}>
                            <StackCard {...badge}/>
                        </li>)}
                </SlidingCarousel>
            </div>
        </section>
    )
}