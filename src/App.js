import React, { Component } from 'react';
import './App.css';
// import Home from './Components/Home';
// import Login from './Components/Login';
import fire from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Links from './Components/Links';
import LandingPage from './Components/Home/LandingPage';
// import Something from './Components/Something';
import Login from './Components/Login'
import Register from './Components/Register';
// import AppartmentList from './Components/Buy/AppartmentsList';
// import SpinningPic from './Components/Home/SpinningPic';
class App extends Component {
 constructor() {
   super();
   this.state = ({
     user: null,
   });
 }
 componentDidMount() {
   this.authListener();
 }
 authListener = () => {
   fire.auth().onAuthStateChanged((user) => {
     console.log(user);
     if (user) {
       this.setState({ user });
       localStorage.setItem('user', user.uid);
     } else {
       this.setState({ user: null });
       localStorage.removeItem('user');
     }
   });
 }
 render() {
   return (
     <Router>
       <div>
         <div>
           {this.state.user ?
             (
               <div>
               <Links />
               <Route exact path='/' render={() => <LandingPage />} />
             </div>
             )
             : (
                <div>
                  <Route exact path='/' render={() =>  <Login />} />
                  <Route exact path='/register' render={() => <Register />} />
                 
                </div>
             )}
         </div>
         {/* <Route exact path='/buy' render={() => <AppartmentList />} /> */}
       </div>
     </Router>
   )
 }
}
export default App;




