import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import marked from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const newPreview = marked(markdown);
    setPreview(newPreview);
  }, [markdown]); 

  return (
    <div className="App">
      <textarea 
        value={markdown} 
        onChange={(e) => setMarkdown(e.target.value)} 
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: preview }} /> 
    </div>
  );
}

export default App;
