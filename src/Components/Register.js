import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
import { async } from 'q';
import axios from 'axios';
class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      first: "",
      last: "",
      password: "",
      phone: "",
      isApproved: false,
      firebase_uid: "sdffsd"
    }
  }
  handleInput = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  signToFB = () => {
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({ firebase_uid: u.user.uid })
      this.addUser()
      return u.user.uid
    })
      .catch((error) => {
        console.log(error);
      })
  }
  addUser = async () => {
    console.log(this.state.firebase_uid)
    const user = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.first,
      lastName: this.state.last,
      isApproved: this.state.isApproved,
      firebase_uid: this.state.firebase_uid,
      phone: this.state.phone
    }
    await axios.post("http://localhost:5000/addUser", user)
    this.makeRequestToMail(this.state.email)
  }
  makeRequestToMail = async (email) => {
    // console.log("got To APP.js")
    
    let mail = {
      from: `APARTMENT PROJEC-LTD <phantomsub0@Gmail.com>`,
        to: email,
        subject: "important Note from APARTMENT PROJEC-LTD ",
        text: `Thanks for registering ${this.state.first} ${this.state.last}, your welcome to go into our site at :http://localhost:5000/ `
  }
    await axios.post('http://localhost:5000/sendEmail', mail)
  }

render() {
  return (
    <div className="login-container">
      <div>
        <p>Email :</p>
        <input type="text" name="email" type="email" name="email" onChange={this.handleInput} placeholder="Enter email" />
      </div>
      <div>
        <p>First Name :</p>
        <input type="text" name="first" type="text" onChange={this.handleInput} placeholder="Enter First Name" />
      </div>
      <div>
        <p>Last Name :</p>
        <input type="text" name="last" type="text" onChange={this.handleInput} placeholder="Enter Last Name" />
      </div>
      <div>
        <p>Password :</p>
        <input type="password" name="password" onChange={this.handleInput} type="password" placeholder="Password" />
      </div>
      <div>
        <p>Phone Number :</p>
        <input className="form-control" name="phone" onChange={this.handleInput} placeholder="Phone" />
      </div>

      <button onClick={this.signToFB} className="waves-effect waves-light btn">Register</button>

    </div >
  );
}
}
export default Register;