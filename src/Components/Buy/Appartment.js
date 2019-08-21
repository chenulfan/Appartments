import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Appartment extends Component {
    render() {
        return (
            <div className="appartment-card dib grow ma3 pa4 ma2 bw2 shadow-5 " onClick={null}>
                <p>this is a sample card</p>
            </div>
        )
    }
}

export default Appartment