import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../firebase';
import { async } from 'q';
import axios from 'axios';
import moment from 'moment'
import './register.css';
import FileUploadProgress from 'react-fileupload-progress';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dwsbzomzq/upload';
const CLOUDINARY_UPLOAD_PRESET = 'hkohzhgl';

class NewAppartment extends Component {
    constructor() {
        super()
        this.state = {
            rooms: "",
            location: "",
            price: "",
            type: "",
            description: "",
            url: '',
            show: false
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
        let owner_id = localStorage.getItem("user")
        console.log(owner_id)
        console.log(date)
        console.log(this.state.url)
        const app = await {
            rooms: this.state.rooms,
            location: this.state.location,
            price: parseInt(this.state.price),
            type: this.state.type,
            description: this.state.description,
            owner_id,
            date,
            url: this.state.url
        }
        console.log(app)
        axios.post("http://localhost:5000/addAppartment", app)
        this.showPopUp()
    }

    imgHandler = (e) => {
        let file = e.target.files[0]
        console.log(file)
        let formData = new FormData();
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(async function (res) {
            console.log(res.data.secure_url)
            return res.data.secure_url
        }).then(url => {
            this.setState({ url })
            console.log(this.state.url)
        })
    }
    showPopUp = () => {
        this.setState({ show: true })
        setTimeout(() => { this.setState({ show: false }) }, 8000)
    }
    render() {
        return (
            <div className="putData">
                <div className="question">
                    <input name="rooms" type="text" autoComplete="off" name="rooms" onChange={this.handleInput} required />
                    <label>Rooms</label>
                </div>

                <div className="question">
                    <input name="location" type="text" autoComplete="off" onChange={this.handleInput} required />
                    <label>Location</label>
                </div>

                <div className="question">
                    <input name="price" type="nubmer" autoComplete="off" onChange={this.handleInput} required />
                    <label>price</label>

                </div>

                <div className="radio-button">
                    <label className="radio">
                        <input type="radio" name="type" value="1" onChange={this.handleInput} value="rent" />
                        <span>Rent:</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="type" value="2" onChange={this.handleInput} value="sell" />
                        <span>Sell</span>
                    </label>
                </div>


                <div className="question">
                    <input name="description" type="text" autoComplete="off" onChange={this.handleInput} required />
                    <label>description</label>
                </div>


                <div className="addFile">
                    <input type="file" onChange={this.imgHandler} />
                </div>
                <button onClick={this.addAppartment} className="waves-effect waves-light btn">Add your Appartment!</button>
                {this.state.show ? <div className="popUp"> Appartment added successfully! </div> : null}
            </div >
        );
    }
}
export default NewAppartment;

{/* <div>
    <FileUploadProgress key='ex1' url='https://api.cloudinary.com/v1_1/dwsbzomzq/upload'
        onProgress={(e, request, progress) => { console.log('progress', e, request, progress); }}
        onLoad={(e, request) => { console.log('load', e, request); }}
        onError={(e, request) => { console.log('error', e, request); }}
        onAbort={(e, request) => { console.log('abort', e, request); }}
    />
</div> */}