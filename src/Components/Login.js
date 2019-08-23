import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
import './login.css'
class Login extends Component {
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     password: ''
   };
 }
 handleChange = (e) => {
   this.setState({ [e.target.name]: e.target.value });
 }
 login = () => {
   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
   }).catch((error) => {
     console.log(error);
   });
 }

 render() {
   return (
<div className="row">
      <span>
        <input type="text" value={this.state.email} onChange={this.handleChange} type="email" name="email" className="gate" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ID:"/><label for="exampleInputEmail1">username</label>
      </span>
      <br />
      <span>
        <input type="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" className="gate" id="exampleInputPassword1" placeholder="Its a Secret Shhh!" /><label for="exampleInputPassword1">password</label>
      </span>
      <br />
      <span>
        <p>Dont have a user ? <Link to='/register' className='link'>Resgister</Link></p>
      </span>
      <br />
    <button type="submit" onClick={this.login} >Login</button>
</div >
   );
 }
}
export default Login;