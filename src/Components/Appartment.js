
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';

class Appartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_id: props.appartment.owner_id,
            contact: {}
        }
    }
    componentDidMount = async () => {
        const contact = await this.getContactFromDB()
        console.log(contact.data[0])
        this.setState({ contact: contact.data[0] })

    }
    getContactFromDB = async () => {
        const owner_id = this.state.owner_id
        // console.log(owner_id)
        let contact = await Axios.get(`http://localhost:5000/contact/${owner_id}`)
        return contact
    }
    addAppartmentToFav = async () =>{
        const id_u = this.state.contact.id
        const id_app =  this.props.appartment.id
        // console.log(id_u, id_app)
        Axios.post(`http://localhost:5000/addFAv`, {id_u, id_app})
    }
    render() {
        const appartment = this.props.appartment
        // console.log(this.props.appartment.id)
        // console.log(this.state.contact)
        return (
            <div className="apartment">
                <div className="apartmentPicture">
                    <img src={appartment.img} />
                </div>
                <div className="apartmentData">
                    <button onClick={this.addAppartmentToFav}> add to fav</button>
                    <span> Price: {appartment.price} </span>
                    <span> Rooms: {appartment.rooms} </span>
                    <span> Adress: {appartment.location} </span>
                    {this.state.contact ? <div>
                        <span> contact:  {this.state.contact.email} </span>
                        <span> name:  {this.state.contact.firstName} {this.state.contact.lastName} </span>
                        <span> phone:  {this.state.contact.phone} </span>
                    </div> : null }
                    <span> For {appartment.type}  </span>
                    <span> Uploaded {appartment.uploaded}  </span>
                </div>
                <span> Description: {appartment.description} </span>
            </div>
        )
    }
}

export default Appartment
