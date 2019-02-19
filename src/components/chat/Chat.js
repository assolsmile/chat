import React from 'react';
import Card from "../card/Card";
import ChatInput from "../input/ChatInput"

const Chat = (props) => {
  const {messages, currentUser, sendMessage} = props;
  const cards = messages.map((item, index) => {
    const currentUserData = {...item, currentUser};
    return <Card key={index} {...currentUserData}/>
  });
  return (
    <div className='chat'>
      <div className='chat__body'>
        {cards}
      </div>
      <ChatInput sendMessage={sendMessage} currentUser={currentUser}/>
    </div>
  )
}

export default Chat;
