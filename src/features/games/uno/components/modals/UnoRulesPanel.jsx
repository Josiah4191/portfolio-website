import './UnoRulesPanel.css'
import Panel from "../shared/Panel.jsx";
import {BookOpen, Ban, RefreshCcw, Users, CircleAlert, FastForward, Hand, MousePointerClick} from "lucide-react";

export default function UnoRulesPanel() {
    const gamePlayRules = [
        "Match the color or value of the top card on the discard pile.",
        "If you cannot play a card, draw a card from the draw pile.",
        "When you have one card remaining, call UNO before the timer expires.",
        "The first player to play all of their cards wins the game.",
    ]

    const gameControls = [
        {
            icon: MousePointerClick,
            title: "Play Card",
            description: "Click on a card to play it."
        },
        {
            icon: Hand,
            title: "Draw Card",
            description: "Click the draw pile or Draw button.",
            desktop: "(Desktop: Press 1)"
        },
        {
            icon: Users,
            title: "Call Out UNO",
            description: "Click the Call Out button.",
            desktop: "(Desktop: Press 2)"
        },
        {
            icon: CircleAlert,
            title: "Call UNO",
            description: "Click the UNO button.",
            desktop: "(Desktop: Press 3)"
        },
        {
            icon: FastForward,
            title: "Pass Turn",
            description: "Click the Pass Turn button.",
            desktop: "(Desktop: Press 4)"
        }
    ]

    const actionRules = [
        {
            icon: Ban,
            title: "Skip",
            description: "The next player loses their turn."
        },
        {
            icon: "+2",
            title: "Draw Two",
            description: "The next player draws two cards and loses their turn."
        },
        {
            icon: RefreshCcw,
            title: "Reverse",
            description: "Reverses the direction of play. In a two-player game, Reverse acts as a Skip."
        },
        {
            icon: "W",
            title: "Wild",
            description: "Choose the next color."
        },
        {
            icon: "+4",
            title: "Wild Draw Four",
            description: "Choose the next color. The next player draws four cards and loses their turn."
        }
    ];

    return (
        <Panel className="uno-rules-panel" aria-labelledby="uno-rules-title">

            <div className="uno-rules-header">
                <BookOpen className="uno-rules-icon" aria-hidden="true"/>
                <h1 id="uno-rules-title" className="uno-rules-title">Rules</h1>
            </div>

            <div className="uno-rules-content">
                <section className="uno-rules-section">
                    <h2 className="uno-rules-title-secondary">GAMEPLAY</h2>

                    <ul className="uno-gameplay-list">
                        {gamePlayRules.map((rule, index) => (
                            <li key={index} className="uno-rule-item">
                                <span className="uno-rule-bullet"/>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="uno-rules-section uno-rules-section-actions">
                    <h2 className="uno-rules-title-secondary">ACTIONS</h2>

                    {actionRules.map((rule) => {

                        const Icon = rule.icon;
                        return (<article key={rule.title} className="uno-action-rule">
                            <span className="uno-action-rule-icon-wrapper" aria-hidden="true">
                                    {typeof rule.icon === "string" ?
                                        <span className="uno-rules-action-text">{Icon}</span> :
                                        <Icon className="uno-rules-action-icon"/>}
                                </span>
                            <div className="uno-action-text-wrapper">
                                <h3 className="uno-action-title">{rule.title}</h3>
                                <p className="uno-action-description">{rule.description}</p>
                            </div>
                        </article>)
                    })}
                </section>

                <section className="uno-rules-section uno-rules-section-controls">
                    <h2 className="uno-rules-title-secondary">CONTROLS</h2>

                    {gameControls.map((control) => {
                        const Icon = control.icon;
                        return (<article key={control.title} className="uno-control-rule">
                            <span className="uno-control-rule-icon-wrapper" aria-hidden="true">
                                    {typeof control.icon === "string" ?
                                        <span className="uno-rules-control-text">{Icon}</span> :
                                        <Icon className="uno-rules-control-icon"/>}
                                </span>
                            <div className="uno-control-text-wrapper">
                                <h3 className="uno-control-title">{control.title}</h3>
                                <p className="uno-control-description">{control.description}</p>
                                <p className="uno-control-description">{control.desktop}</p>
                            </div>
                        </article>)
                    })}
                </section>
            </div>
        </Panel>
    )
}