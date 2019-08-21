import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
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
 signup = () => {
   fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
   }).then((u) => { console.log(u) })
     .catch((error) => {
       console.log(error);
     })
 }
 render() {
   return (
     <div className="login-container">
       <span>
         <p>User Name :</p>
         <input type="text" value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       </span>
       <span>
         <p>Password :</p>
         <input type="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
       </span>
       <span>
         <p>Dont have a user ? <Link to='/register' className='link'>Resgister</Link></p>
       </span>
     <button type="submit" onClick={this.login} class="btn btn-primary" className="waves-effect waves-light btn" >Login</button>
</div >
   );
 }
}
export default Login;