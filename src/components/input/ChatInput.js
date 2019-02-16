import React from 'react';
import { Button, Form, Input } from 'reactstrap';

const ChatInput = () => {
  return (
  <div className="input-area">
    <Form className="input-form">
      <Input type="input" name="message" id="input-text" placeholder="Message" />
      <Button className='btn'> Send </Button>
    </Form>
  </div>
  )
}

export default ChatInput;
