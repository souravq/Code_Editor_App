import React from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Syntax Highlighting Code Editor using React
        </h1>
        <CodeEditor />
      </header>
    </div>
  );
};

export default App;
