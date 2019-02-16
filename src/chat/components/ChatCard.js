import React from 'react';

const ChatCard = () => {
  return(
    <div className='chat__body'>
      <div className='chat__received-messages'>
        <p className="chat__messages-contact-name">Peter Parker</p>
        <p className="chat__message-content">Some content</p>
        <p className="chat__messages-date">21/01/2019</p>
      </div>
      <div className='chat__my-messages'>
        <p className="chat__messages-contact-name">Assel Seraliyeva</p>
        <p className="chat__message-content">Some content</p>
        <p className="chat__messages-date">21/01/2019</p>
      </div>
    </div>
  )
}

export default ChatCard;
