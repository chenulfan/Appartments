import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Appartment from './Appartment';
import iFrame from './iFrame';

class AppartmentList extends Component {
    render() {
        return (
            <div className="appartments-container">
              <Appartment/>
              {/* <iFrame/> */}
            </div>
        )
    }
}

export default AppartmentList