import './App.css';
import NavigationBar from './components/NavigationBar';
import React, { Component } from "react";
import './bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <NavigationBar/> 
        Created by SASE Labs 2020-2021
      </center>
    );
  }
}

export default App;
