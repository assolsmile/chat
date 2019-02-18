import React from 'react';
import Card from "../card/Card";
import ChatInput from "../input/ChatInput"

const Chat = ({ messages, currentUser}) => {

  const cards = messages.map((item, index)=> {
    const currentUserData = {...item, currentUser};
    return <Card key={index} {...currentUserData}/>
  })
  return (
    <div className='chat'>
      <div className='chat__body'>
        {cards}
      </div>
      <ChatInput/>
    </div>
  )
}

export default Chat;
