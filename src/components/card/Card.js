import React from 'react';

const Card = ({name, message, timestamp, currentUser}) => {

  const date = new Date().setMilliseconds(timestamp);
  const messageClass = name === currentUser ? "chat__my-messages" : "chat__received-messages";

  return(
      <div className={ messageClass }>
        <p className="chat__messages-contact-name">{ name }</p>
        <p className="chat__message-content">{ message }</p>
        <p className="chat__messages-date">{ date.toLocaleString() }</p>
      </div>
  )
};

export default Card;
