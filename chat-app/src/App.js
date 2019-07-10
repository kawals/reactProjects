import React, { Component } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessgaeForm from './components/SendMessgaeForm';
import NewRoomForm from './components/NewRoomForm';

class App extends Component {
  componentDidMount() {
    const chatManager = 
  }
  render() {
    return (
      <div className="App">
        <RoomList/>
        <MessageList/>
        <SendMessgaeForm/>
        <NewRoomForm/>
      </div>
    );
  }
}

export default App;
