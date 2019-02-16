import React from 'react';
import ChatCard from "./ChatCard";
import ChatInput from "./ChatInput"

const Chat = () => {
  return(
    <div className='chat'>
      <ChatCard/>
      <ChatInput/>
    </div>
  )
}

export default Chat;
