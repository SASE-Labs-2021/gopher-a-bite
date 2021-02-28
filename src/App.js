import './App.css';
import NavigationBar from './components/NavigationBar';
import React, { Component } from "react";
import './bootstrap.css';
import UserProvider from "./providers/UserProvider";
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <UserProvider>
          <NavigationBar/> 
          Created by SASE Labs 2020-2021
         </UserProvider>
        
      </center>
    );
  }
}

export default App;
