import './App.css';
import NavigationBar from './components/NavigationBar';
import React, { Component } from "react";
import './bootstrap.css';
import UserProvider from "./providers/UserProvider";
import AppWrapper from "./components/AppWrapper";
import firebase from "firebase/app";

//Styling for sign in
const white = {
  background: "#fff",
  width: '25rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '8px solid #bd930a',
  color: '#540101'
}
var provider = new firebase.auth.GoogleAuthProvider();
var user = firebase.auth().currentUser;

class App extends Component {

  render() {

    return (
      <center>
          <UserProvider>
            <AppWrapper/>
          </UserProvider>
        
      </center>
    );
  }
}

export default App;
