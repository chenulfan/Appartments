
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';

class FavAppartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_id: props.appartment.owner_id,
            contact: {},
            showContact: false,
            showDescription: false,
            classname: ''
        }
    }
    componentDidMount = async () => {
        const contact = await this.getContactFromDB()
        console.log(contact)
        console.log(contact.data[0])
        this.setState({ contact: contact.data[0] })

    }
    getContactFromDB = async () => {
        const owner_id = this.state.owner_id
        // console.log(owner_id)
        let contact = await Axios.get(`http://localhost:5000/contact/${owner_id}`)
        return contact
    }
    removeFromFav = async () => {
        const id = this.props.appartment.id
        Axios.get(`/remove/${id}`)
    }
    showContact = async () => {
        await this.setState({ showContact: !this.state.showContact })
        if (this.state.showContact)
            this.setState({ classname: "showContact" })
        else if (this.state.showDescription)
            this.setState({ classname: "showDescription" })
        else
            this.setState({ classname: '' })
    }
    showDescription = async () => {
        await this.setState({ showDescription: !this.state.showDescription })
        const boxStyle = document.getElementsByClassName("apartment-box")[0]
        if (this.state.showDescription && this.state.showContact)
            this.setState({ classname: "showBoth" })
        else if (this.state.showDescription)
            this.setState({ classname: "showDescription" })
        else if (this.state.showContact)
            this.setState({ classname: "showContact" })
        else
            this.setState({ classname: '' })

    }

    render() {
        const appartment = this.props.appartment
        // console.log(this.props.appartment.id)
        // console.log(this.state.contact)
        return (

            <div className={`apartment-box ${this.state.classname}`}>

                <div >
                    <img className="apartmentPicture" src={appartment.img} />
                </div>

                <div className="row-grid-appartment rooms"> {appartment.rooms} rooms </div>

                <div className="row-grid-appartment"> {appartment.location} </div>

                <div className="row-grid-appartment">  {appartment.price}$</div>

                {this.state.contact && this.state.showContact ? <div className="contact-info" onClick={this.showContact}> Contact Info
                    <div className="row-grid-appartment"> Email:  {this.state.contact.email} </div>
                    <div className="row-grid-appartment"> name:  {this.state.contact.firstName} {this.state.contact.lastName} </div>
                    <div className="row-grid-appartment"> phone:  {this.state.contact.phone} </div>
                </div> : <div className="contact-info" onClick={this.showContact}> Contact Info </div>}

                {/* <span> Uploaded: {appartment.uploaded}  </span> */}

                {this.state.showDescription ?
                    <div onClick={this.showDescription} className="row-grid-appartment description">  description:
                    <div>  {appartment.description} </div>
                    </div>
                    :
                    <div onClick={this.showDescription} className="row-grid-appartment description">  description: </div>
                }
            </div>


        )
    }
}

export default FavAppartment
