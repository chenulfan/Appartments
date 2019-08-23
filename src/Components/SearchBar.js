import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            location : "",
            rooms : "",
            price : "",
            appartments : this.props.appartments
        }
    }//this.props.data
    inputHandler = async (e) => {
        await this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
        let fillteredApp = this.state.appartments.filter(a => {
            return this.manMaker(a)
          })
          console.log(fillteredApp)
          return fillteredApp
    }
    manMaker = (a) => { 
        if(this.state.rooms !== "" && this.state.price !== "" && this.state.location !== "" ){
            return a.rooms == this.state.rooms  && a.location.toLowerCase().includes(this.state.location.toLowerCase())  &&  a.price <= this.state.price
        }
        if(this.state.location !== "" && this.state.rooms !== ""){
            return a.location.toLowerCase().includes(this.state.location.toLowerCase()) && a.rooms == this.state.rooms
        } 
        if(this.state.location !== "" && this.state.price !== ""){
            return a.location.toLowerCase().includes(this.state.location.toLowerCase()) && a.price <= this.state.price
        }
        if(this.state.rooms !== "" && this.state.price !== ""){
            return a.rooms == this.state.rooms && a.price <= this.state.price
        }
        if(this.state.location !== "" ){
            return a.location.toLowerCase().includes(this.state.location.toLowerCase())
        }
        if(this.state.rooms !== "" ){
            return a.rooms == this.state.rooms
        }
        if(this.state.price !== "" ){
            return a.price <= this.state.price
        }
    }
  
    render() {
        return (
            <div className="searchBar" >
              <input type="text" onChange={this.inputHandler} name="location" placeholder="Location" />
              <input type="text" onChange={this.inputHandler} name="rooms" placeholder="Rooms" />
              <input type="text" onChange={this.inputHandler} name="price" placeholder="Max Price" />
            </div>
        )
    }
}
export default SearchBar