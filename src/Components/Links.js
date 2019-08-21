import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import fire from '../firebase';
class Links extends Component {
   logout = () => {
       fire.auth().signOut();
   }
   render() {
       return (
           <div className="navbar dib bg-black br3 pa3 ma2 bw2 shadow-5 ">
               <Link to='/' className='link ma2 ref'>Home</Link>
               <Link to='/buy' className='link ma2 ref'>Buy</Link>
               <Link to='/rent' className='link ma2 ref'>Rent</Link>
               <Link to='/login' className='link ma2 ref'>Login</Link>
               <Link to='/addAppartment' className='link ma2 ref'> Add Appartment</Link>
               <Link to='/' className='link ma2 ref' onClick={this.logout}>logout</Link>
           </div>
       )
   }
}
export default Links