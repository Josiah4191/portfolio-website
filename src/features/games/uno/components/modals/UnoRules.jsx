import './UnoRules.css'

export default function UnoRules() {
    const gamePlayRules = [
        "Match the color or value of the top card on the discard pile.",
        "If you cannot play a card, draw a card from the draw pile.",
        "When you have one card remaining, call UNO before the timer expires.",
        "The first player to play all of their cards wins the game.",
    ]

    const actionRules = [
        {
            icon: "⦸",
            title: "Skip",
            description: "The next player loses their turn."
        },
        {
            icon: "+2",
            title: "Draw Two",
            description: "The next player draws two cards and loses their turn."
        },
        {
            icon: "↺",
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
        <section className="uno-rules" aria-labelledby="uno-rules-title">

            <div className="uno-rules-header">
                <h1 id="uno-rules-title" className="uno-rules-title">Rules</h1>
            </div>

            <section className="uno-rules-section">
                <h2 className="uno-rules-title-secondary">Gameplay</h2>

                <ul className="uno-gameplay-list">
                    {gamePlayRules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
            </section>

            <section className="uno-rules-section uno-rules-section-actions">
                <h2 className="uno-rules-title-secondary">Actions</h2>

                {actionRules.map((rule) => (
                    <article key={rule.title} className="uno-action-rule">
                        <div className="uno-action-rule-header">
                            <span className="uno-action-rule-icon" aria-hidden="true">{rule.icon}</span>
                            <h3 className="uno-action-title">{rule.title}</h3>
                        </div>
                        <p>{rule.description}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}