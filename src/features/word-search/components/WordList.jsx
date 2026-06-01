import './WordList.css'

export default function WordList({puzzle, foundWords, cellsMatch}) {
    return (
        <div className="word-search-word-list">
            {puzzle?.placedWords.map((placedWord) => {
                const isFound = foundWords.some((foundWord) => cellsMatch(foundWord.cells, placedWord.cells));
                return <p className={`word-search-word-list-item ${isFound ? "found-item" : ""}`}>
                    <span className="word-search-word-check">✓</span>
                    <span className={isFound ? "found" : ""}>{placedWord.word}</span>
                </p>
            })}
        </div>
    )
}