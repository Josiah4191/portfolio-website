import WordCanvas from "../components/WordCanvas.jsx"
import './WordSearchPage.css'

export default function WordSearchPage() {
    return (
        <div className="section word-search-section">
            <div className="grid page-margin">
                <div className="word-search-wrapper">
                    <WordCanvas/>
                </div>
            </div>
        </div>
    )
}