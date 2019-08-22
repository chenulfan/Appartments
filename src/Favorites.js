import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import FavAppartment from './Components/FavAppartment';


class Favorites extends Component {
    constructor(){
        super()
        this.state = {
            favAppartments: []
        }
    }
    componentDidMount = async () => {
        const favAppartments = await this.getFavAppartmentsFromDB()
        console.log(favAppartments)
        this.setState({favAppartments})
    }

    getFavAppartmentsFromDB = async () => {
        const id_u = localStorage.getItem("user")
        let appartments = await Axios.get(`http://localhost:5000/Fav/${id_u}`)
        return appartments.data

    }
    render() {
        const favAppartments = this.state.favAppartments
        console.log(favAppartments)
        return (
            <div className="appartments-container">
                {favAppartments.length>0 ? favAppartments.map(a => <FavAppartment appartment={a} />) : null }
            </div>
        )
    }
}

export default Favorites