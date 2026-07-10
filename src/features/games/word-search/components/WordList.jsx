import './WordList.css'

export default function WordList({words}) {
    return (
        <section className="word-search-words" aria-labelledby="word-list-title">

            <h2 className="word-list-title" id="word-list-title">WORDS TO FIND</h2>

            <ul className="word-search-word-list">
                {words.map((wordItem) => {
                    return (
                        <li
                            key={wordItem.word}
                            className={`word-search-word-list-item ${wordItem.isFound ? "found-item" : ""}`}>
                            <span className={wordItem.isFound ? "found" : ""}>{wordItem.word}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}