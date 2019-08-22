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
               <Link to='/' className='link ma2 ref'> Home </Link>
               <Link to='/buy' className='link ma2 ref'> Buy </Link>
               <Link to='/rent' className='link ma2 ref'> Rent </Link>
               <Link to='/favorites' className='link ma2 ref'> Favorites </Link>
               <Link to='/addAppartment' className='link ma2 ref'> Add Appartment </Link>
               <Link to='/chat' className='link ma2 ref' > Chat </Link>
               <Link to='/' className='link ma2 ref' onClick={this.logout}> Logout </Link>
           </div>
       )
   }
}
export default Links