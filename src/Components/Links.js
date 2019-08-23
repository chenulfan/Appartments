import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import fire from '../firebase';
import "./bar.css"
class Links extends Component {
    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return (<ul>
            <li><Link to='/' className='link ma2 ref'> Home </Link></li>
            <li><Link to='/buy' className='link ma2 ref'> Buy </Link></li>
            <li><Link to='/rent' className='link ma2 ref'> Rent </Link></li>
            <li><Link to='/' className='link ma2 ref' onClick={this.logout}> Logout </Link></li>
            <li><Link to='/favorites' className='link ma2 ref'> Favorites </Link></li>
            <li><Link to='/addAppartment' className='link ma2 ref'> Add Appartment </Link></li>
            <li><Link to='/chat' className='link ma2 ref' > Chat </Link></li>
        </ul>
        )
    }
}
export default Links