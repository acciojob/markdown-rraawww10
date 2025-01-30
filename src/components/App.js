import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./styles/App.css";


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
            />
            <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
}

export default App;
