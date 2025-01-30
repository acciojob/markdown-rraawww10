import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "../styles/App.css";

function App() {
    const [markdown, setMarkdown] = useState("# Hello world");
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        setHtmlContent(marked(markdown));
    }, [markdown]);

    return (
        <div className="app">
            <textarea
                className="textarea"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                data-testid="markdown-textarea" // Added a data-testid for testing purposes
            />
            <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                data-testid="html-preview" // Added a data-testid for testing purposes
            />
        </div>
    );
}

export default App;
