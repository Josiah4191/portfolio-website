import './WordList.css'

export default function WordList({words}) {
    return (
        <section aria-labelledby="word-list-title">

            <h2 id="word-list-title" className="sr-only">Words to Find</h2>

            <ul className="word-search-word-list">
                {words.map((wordItem) => {
                    return (
                        <li key={wordItem.word}>
                            <p className={`word-search-word-list-item ${wordItem.isFound ? "found-item" : ""}`}>
                                <span className="word-search-word-check" aria-hidden="true">✓</span>
                                <span className={wordItem.isFound ? "found" : ""}>{wordItem.word}</span>
                            </p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}