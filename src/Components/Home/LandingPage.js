import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SpinningPic from './SpinningPic';

class LandingPage extends Component {
    some = () =>{
        console.log(localStorage.getItem("user"))
      }
    render() {

        return (
            
            <div>
             <SpinningPic/>
             <button onClick={this.some} className="waves-effect waves-light btn">sdadsdas</button>
            </div>
        )
    }
}

export default LandingPage
