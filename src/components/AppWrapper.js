
import NavigationBar from './NavigationBar';
import React, {useContext } from "react";


// for sign in
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import { UserContext } from "../providers/UserProvider";
//Styling for sign in
const white = {
  background: "#fff",
  width: '25rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '5px solid #bd930a',
  color: '#540101'
}
var provider = new firebase.auth.GoogleAuthProvider();

function AppWrapper(){

    const user = useContext(UserContext);
    // log in cover with be rendered if nobody has signed in yet
    if(user == null) //Case where they are not signed in
    { // generate a button that they can click to log in with Google
      console.log("sign in page pop up");
      return(
        <center>
          <h1> Gopher A Bite </h1>
          <p>Welcome! Before we can give you restaurant recommendations, please sign in! </p>
          <Card style = {white}>
            <h2>Sign In</h2>
            <div>
              <Button
                onClick=
                {() => 
                  { // once they click on the button, a pop up for google sign in pops up
                    
                    firebase
                      .auth()
                      .signInWithPopup(provider)
                      .then((result) => 
                      {
                        console.log("Signed out");
                        console.log(user)
                        //this.setState({ signedIn: true }) // once set to true, the nav bar will appear
                      });
                  }
                }
              >
                Click Here to Sign in with Google
              </Button>
              </div>
          </Card>
        </center>
      );
    }

    return (
      <center>
          <NavigationBar/> 
          Created by SASE Labs 2020-2021
      </center>
    );
  }

export default AppWrapper;
