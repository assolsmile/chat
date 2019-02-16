import React from 'react';
import Card from "../card/Card";
import ChatInput from "../input/ChatInput"

const Chat = (props) => {
  const messages = [
    {
      name: "Assel",
      timestamp: 333333333333333,
      message: "SThanks"
    },
    {
      name: "Rob",
      timestamp: 333333333333333,
      message: "SThanks"
    },
    {
      name: "Rob",
      timestamp: 333333333333333,
      message: "SThanks"
    },

  ];

  const currentUser = "Assel";


  const cards = messages.map(item => {
    const currenUserDate = {...item, currentUser}
    return <Card {...currenUserDate}/>
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
