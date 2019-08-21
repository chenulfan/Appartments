import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import Appartment from './Appartment';

class Buy extends Component {
    constructor() {
        super()
        this.state = {
            appartments: []
        }
    }
    componentDidMount = () =>{
        this.getAppartmentsFromDB()
    }
    getAppartmentsFromDB = async () => {
        let appartments = await Axios.get("http://localhost:5000/appartments")
            // console.log("asdsadasdasdsadasdreq")
            // console.log(appartments.data)
            this.setState({appartments: appartments.data})
    }
    render() {
        const appartments = this.state.appartments
        return (

            <div>
                 {appartments.map( a => <Appartment appartment = {a} />)} 
            </div>
        )
    }
}

export default Buy
