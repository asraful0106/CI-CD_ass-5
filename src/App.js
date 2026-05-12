import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React CI/CD Demo</h1>
        <p>
          This app is automatically built and tested via{" "}
          <strong>GitHub Actions</strong> using a{" "}
          <strong>self-hosted runner</strong>.
        </p>
        <div className="pipeline-info">
          <h2>Pipeline Steps</h2>
          <ol>
            <li>✅ Checkout code</li>
            <li>✅ Set up Node.js</li>
            <li>✅ Install dependencies (npm ci)</li>
            <li>✅ Run tests</li>
            <li>✅ Build React app</li>
            <li>✅ Verify build output</li>
          </ol>
        </div>
        <p className="branch-info">
          Pipeline triggers on every push to the{" "}
          <code>development</code> branch.
        </p>
      </header>
    </div>
  );
}

export default App;
