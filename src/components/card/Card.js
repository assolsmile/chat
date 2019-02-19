import React from 'react';

const Card = ({ author, message, timestamp, currentUser}) => {

  const date = new Date(timestamp);
  const messageClass = author === currentUser ? "chat__my-messages" : "chat__received-messages";

  return(
      <div className={ messageClass }>
        <p className="chat__messages-contact-name">{ author }</p>
        <p className="chat__message-content">{ message }</p>
        <p className="chat__messages-date">{ date.toLocaleString() }</p>
      </div>
  )
};

export default Card;
