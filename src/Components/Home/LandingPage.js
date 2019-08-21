import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SpinningPic from './SpinningPic';

class LandingPage extends Component {
    render() {

        return (
            
            <div>
             <SpinningPic/>
            </div>
        )
    }
}

export default LandingPage
