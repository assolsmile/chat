import React from 'react';
import { Button, Form, Input } from 'reactstrap';
//import { Field, reduxForm } from "redux-form";

const ChatInput = props => {
  const { handleSubmit } = props;
  return (
  <div className="input-area">
    <Form className="input-form" onSubmit={handleSubmit}>
      <Input type="text" name="message" placeholder="Message" />
      <Button className='btn' type="submit"> Send </Button>
    </Form>
  </div>
  )
};

export default ChatInput;

// export default reduxForm({
//   form: 'chat_form' // a unique identifier for this form
// })(ChatInput);

