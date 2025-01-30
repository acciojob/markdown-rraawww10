import React, { useState, useEffect } from 'react';
import marked from 'marked';

function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState('# Hello world');
  const [htmlText, setHtmlText] = useState('');

  useEffect(() => {
    const generatedHtml = marked(markdownText);
    setHtmlText(generatedHtml);
  }, [markdownText]);

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="markdown-container">
      <div className="editor">
        <textarea value={markdownText} onChange={handleMarkdownChange} />
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  );
}

export default MarkdownEditor;
