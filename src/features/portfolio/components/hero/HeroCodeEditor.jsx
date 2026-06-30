import './HeroCodeEditor.css';

import {ChevronDown} from "lucide-react";
import {useEffect, useRef} from "react";

export default function HeroCodeEditor() {
    const bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current?.scrollTo({
            top: bodyRef.current.scrollHeight,
            left: 0,
        })
    }, []);

    return (
        <div className="hero-code-editor" aria-hidden="true">

            <div className="hero-code-editor-titlebar">
                <div className="hero-code-editor-title">
                    <div className="hero-code-editor-title-logo">P</div>
                    <p className="hero-code-editor-title-text">portfolio</p>
                    <ChevronDown size={16} strokeWidth={2.5}/>
                </div>
                <div className="hero-code-editor-dots">
                    <div className="hero-code-editor-dot red"/>
                    <div className="hero-code-editor-dot yellow"/>
                    <div className="hero-code-editor-dot green"/>
                </div>
            </div>

            <div ref={bodyRef} className="hero-code-editor-body">

                <div className="hero-code-editor-sidebar">
                    {Array.from({length: 19}, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <pre className="hero-code-editor-code">
                <span className="code-editor-keyword">export default function</span>{" "}
                    <span className="code-editor-function">Home</span>
                <span className="code-editor-punctuation">{"() {"}</span>

                    {"\n    "}
                    <span className="code-editor-keyword">return</span>{" "}
                    <span className="code-editor-punctuation">(</span>{" "}

                    {"\n        "}
                    <span className="code-editor-punctuation">{"<"}</span>
                <span className="code-editor-component">Developer</span>

                    {"\n            "}
                    <span className="code-editor-key">name</span>
                <span className="code-editor-punctuation">=</span>
                <span className="code-editor-value">"Josiah Stoltzfus"</span>

                    {"\n            "}
                    <span className="code-editor-key">role</span>
                <span className="code-editor-punctuation">=</span>
                <span className="code-editor-value">"Full-Stack Developer"</span>

                    {"\n            "}
                    <span className="code-editor-key">focus</span>
                <span className="code-editor-punctuation">=</span>
                <span className="code-editor-punctuation">{"{["}</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">React</span>
                <span className="code-editor-punctuation">",</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">Java</span>
                <span className="code-editor-punctuation">",</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">Spring Boot</span>
                <span className="code-editor-punctuation">",</span>

                    {"\n            "}
                    <span className="code-editor-punctuation">{"]}"}</span>

                    {"\n            "}
                    <span className="code-editor-key">currentlyBuilding</span>
                <span className="code-editor-punctuation">=</span>
                <span className="code-editor-punctuation">{"{["}</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">Portfolio</span>
                <span className="code-editor-punctuation">",</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">UNO</span>
                <span>",</span>

                    {"\n                "}
                    <span className="code-editor-punctuation">"</span>
                <span className="code-editor-value">Word Search</span>
                <span className="code-editor-punctuation">"</span>

                    {"\n            "}
                    <span className="code-editor-punctuation">{"]}"}</span>

                    {"\n        "}
                    <span className="code-editor-punctuation">{"/>"}</span>

                    {"\n    "}
                    <span className="code-editor-punctuation">{");"}</span>

                    {"\n"}
                    <span className="code-editor-punctuation">{"}"}</span>

                    {"\n"}
                    <span className="code-editor-comment">// scroll to explore...</span>

                    <span className="code-cursor" aria-hidden="true"/>

            </pre>

            </div>
        </div>
    );
}

