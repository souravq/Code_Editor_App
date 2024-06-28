import React, { useState, ChangeEvent } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./CodeEditor.css";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
        spellCheck="false"
      />
      <pre className="code-output">
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              code,
              Prism.languages.javascript,
              "javascript"
            ),
          }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
