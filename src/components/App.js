import React, { useState, useEffect } from 'react';
import '../styles/App.css';


function App() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const newPreview = marked(markdown);
    setPreview(newPreview);
  }, [markdown]); 

  return (
    <div className="app">
      <div className="textarea">
        <textarea className="markdown-input"
          value={markdown} 
          onChange={(e) => setMarkdown(e.target.value)} 
        />
      </div>
      <div className="preview">
        <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: preview }} /> 
      </div>
    </div>
  );
}

export default App;
