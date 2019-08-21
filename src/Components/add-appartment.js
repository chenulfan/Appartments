import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
import { async } from 'q';
import axios from 'axios';
import moment from 'moment'
class NewAppartment extends Component {
    constructor() {
        super()
        this.state = {
            rooms: "",
            location: "",
            price: "",
            type: "",
            description: ""
        }
    }
    handleInput = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    addAppartment = async () => {
        let date = moment().format('L')
        let owner_id= localStorage.getItem("user")
        console.log(owner_id)
        console.log(date)
        const app = {
            rooms: this.state.rooms,
            location: this.state.location,
            price: parseInt(this.state.price),
            type: this.state.type,
            description: this.state.description ,
            owner_id,
            date
        }
        console.log(app)
        axios.post("http://localhost:5000/addAppartment", app)
    }

    render() {
        return (
            <div className="login-container">
                <div>
                    <p>Rooms :</p>
                    <input  name="rooms" type="text" name="rooms" onChange={this.handleInput} placeholder="Enter Room Number" />
                </div>
                <div>
                    <p>Location :</p>
                    <input  name="location" type="text" onChange={this.handleInput} placeholder="Enter The Location" />
                </div>
                <div>
                    <p>Price :</p>
                    <input  name="price" type="text" onChange={this.handleInput} placeholder="Enter your Price" />
                </div>
                <div>
                    <label>
                         <input type="radio" name="type" onChange={this.handleInput} value="rent" /> 
                        <span>Rent</span>
                    </label>
                    <label>
                         <input type="radio" name="type" onChange={this.handleInput} value="sell" /> 
                        <span>Sell</span>
                    </label>
                    <div>
                    <p>Description :</p>
                    <input  name="description" type="text" onChange={this.handleInput} placeholder="A short description" />
                </div>
                    {/* <input type="radio" name="rent" onChange={this.handleInput} value="rent" />
                    <p>For Sell </p>
                    <input type="radio" name="sell" onChange={this.handleInput} value="sell" /> */}
                </div>
                <button onClick={this.addAppartment} className="waves-effect waves-light btn">Add your Appartment!</button>

            </div >
        );
    }
}
export default NewAppartment;