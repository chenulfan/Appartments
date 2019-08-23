
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';

class Appartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_id: props.appartment.owner_id,
            contact: {},

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
    addAppartmentToFav = async () => {
        const id_u = this.state.contact.id
        const id_app = this.props.appartment.id
        // console.log(id_u, id_app)
        Axios.post(`http://localhost:5000/addFAv`, { id_u, id_app })
    }
   
    render() {
        const appartment = this.props.appartment
        // console.log(this.props.appartment.id)
        // console.log(this.state.contact)
        return (
            <div className="appartment-card dib grow ma4 bw2 shadow-5 ">
               <img style={{width : "100%" , height: "40%"}} src={appartment.img}/>
               <div>
               <p className="pa1">House Details : </p>
               <p className="pa1"> Location : {appartment.location} , {appartment.rooms} Rooms , Price : {appartment.price} </p>
               <p className="pa1">Description : </p>
               <p className="pa1">{appartment.description}</p>
               <p className="pa1">Contact Info :</p>
               {this.state.contact ?<p className="pa1">{this.state.contact.email} {this.state.contact.firstName} {this.state.contact.lastName} {this.state.contact.phone}</p> : null}
               <p className="pa1"> Uploaded : {appartment.uploaded}  </p>
               <button className="pa1" onClick={this.addAppartmentToFav}> add to fav</button>
               </div>
           </div>
        )
    }
}

export default Appartment


// <div className="apartment">
//                 <div className="row-picture-data-grid">
//                     <div className="apartmentPicture">
//                         <img src={appartment.img} width='200px' height='200px' />
//                     </div>

//                     <div className="apartmentData">
//                         <span> Price : {appartment.price} </span>
//                         <span> Rooms : {appartment.rooms} </span>
//                         <span> Adress : {appartment.location} </span>
//                         {this.state.contact ? <div>
//                             <p>Contact Info </p>
//                             <div> Email :  {this.state.contact.email} </div>
//                             <div> Name :  {this.state.contact.firstName} {this.state.contact.lastName} </div>
//                             <div> Phone :  {this.state.contact.phone} </div>
//                         </div> : null}
//                         <span> Uploaded : {appartment.uploaded}  </span>
//                         <button onClick={this.addAppartmentToFav}> add to fav</button>


                        
//                     </div>
//                 </div>

//                 <span> Description :
//                     <div>  {appartment.description} </div>

//                 </span>
//             </div>