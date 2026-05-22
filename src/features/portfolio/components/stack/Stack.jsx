import './Stack.css';
import StackCard from "./StackCard.jsx";
import {BADGES} from "../../data/Badge-data.js"

export default function Stack() {
    return (
        <section id="stack" className="section">
            <div className="grid page-margin">
                <h1 className="h1 stack-title">stack</h1>
                <p className="stack-description">These are some of the technologies and tools I use when building web applications and software projects.</p>
                <div className="stack-cards-list">
                    {BADGES.map((badge) => <StackCard key={badge.id} {...badge}/>)}
                </div>
            </div>
        </section>
    )
}