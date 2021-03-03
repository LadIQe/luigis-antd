import "./App.css";

import { Button, Popover } from "antd";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Popover title="title" content={<div>test content</div>}>
          <Button>Btn</Button>
        </Popover>
      </header>
    </div>
  );
}

export default App;
