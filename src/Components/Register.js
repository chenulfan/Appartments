import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
class Register extends Component {
// password , email , phone
 render() {
   return (
     <div className="login-container">
       <div>
         <p>Email :</p>
         <input type="text"  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       </div>
       <div>
         <p>First Name :</p>
         <input type="text"  type="text"  placeholder="Enter First Name" />
       </div>
       <div>
         <p>Last Name :</p>
         <input type="text"  type="text"  placeholder="Enter Last Name" />
       </div>
       <div>
         <p>Password :</p>
         <input type="password"  type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
       </div>
       <div>
         <p>Phone Number :</p>
         <input className="form-control"  placeholder="Phone" />
       </div>
       <button  className="waves-effect waves-light btn">Register</button>
</div >
   );
 }
}
export default Register;