import React, { Component } from 'react';
import './App.scss';
import Chat from "./components/chat/Chat";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Chat</h1>
        </header>
        <body>
          <Chat/>
        </body>
      </div>
    );
  }
}

export default App;
