import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
import { async } from 'q';
class Register extends Component {
    constructor(){
        super()
        this.state = {
            email : "",
            first : "",
            last : "",
            password : "",
            phone : ""
        }
    }

    handleInput = async (e) => {
        await this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
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
         <input type="text" name="first"  type="text" onChange={this.handleInput} placeholder="Enter First Name" />
       </div>
       <div>
         <p>Last Name :</p>
         <input type="text" name="last"  type="text" onChange={this.handleInput} placeholder="Enter Last Name" />
       </div>
       <div>
         <p>Password :</p>
         <input type="password" name="password" onChange={this.handleInput} type="password"  placeholder="Password" />
       </div>
       <div>
         <p>Phone Number :</p>
         <input className="form-control" name="phone" onChange={this.handleInput} placeholder="Phone" />
       </div>
       <button onClick className="waves-effect waves-light btn">Register</button>
</div >
   );
 }
}
export default Register;