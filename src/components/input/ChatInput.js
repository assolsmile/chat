import React, {PureComponent} from 'react';
import {Button, Form, Input} from 'reactstrap';

class ChatInput extends PureComponent {
  constructor(props) {
    super(props);
    const {sendMessage, currentUser} = props;
    this.state = {value: ''};

    this.sendMessage = sendMessage;
    this.currentUser = currentUser;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendMessage(this.currentUser, this.state.value);
    this.setState({value: ""});
  }

  render() {
    return (
      <div className="input-area">
        <Form className="input-form" onSubmit={this.handleSubmit}>
          <Input type="input"
                 required
                 value={this.state.value}
                 onChange={this.handleChange}
                 name="message"
                 placeholder="Message"/>
          <Button className='btn' type="submit"> Send </Button>
        </Form>
      </div>
    )
  }
}

export default ChatInput;
