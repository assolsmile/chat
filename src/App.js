import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "./actions";
import React, {Component} from 'react';
import './App.scss';
import Chat from "./components/chat/Chat";

class App extends Component {
  componentDidMount() {
    const {loadAll} = this.props;
    loadAll();
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Chat</h1>
        </header>
        <div className="chat-body">
          <Chat {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  currentUser: state.chat.currentUser
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
