
import React, { Component } from 'react';

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      message: '',
      listMessage: [],
      feedback: ""
    }
  }
  componentDidMount(){
    
    socket.on('chat', (data) => {
      const listMessage = [...this.state.listMessage]
      listMessage.push(data)
      this.setState({ listMessage, feedback: ''})
    })
    socket.on('typing', (data) =>{
      this.setState({feedback: data +' is typing...'})
    })
  }

  addMessage = () => {
    socket.emit('chat', {
      user: this.state.user,
      message: this.state.message
    })
    this.setState({ message: "" })
    // this.setState({ feedback: "" })
  }
  handleInput = async (e) => {
    let input = e.target.name
    await this.setState({ [input]: e.target.value })
    // console.log(this.state)
  }
  messageTyping = async () =>{
    socket.emit('typing', this.state.user)

  }
  aaaaaa = () => {
    console.log(this.state.listMessage)
  }
  render() {
    return (
      <div id="chat-containter">
        <div id="chat-window">
          <div id="output">
            {this.state.listMessage.map(l => <p><strong> {l.user}: </strong> {l.message} </p>)}
          </div>
          <div id="feedback"> {this.state.feedback} </div>
        </div>
        <input id="user" className="inp" name="user" placeholder="user name" value={this.state.user} onChange={this.handleInput} ></input>
        <input id="message" className="inp" name="message" placeholder="message" value={this.state.message} onChange={this.handleInput} onKeyPress={this.messageTyping}></input>
        <button id="send" className="btn-Chat" onClick={this.addMessage}> Send </button>
      </div>


    );
  }

}

export default Chat;
