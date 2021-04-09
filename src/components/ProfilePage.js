import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const white = {
  background: "#fff",
  width: '18rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '5px solid #bd930a',
  color: '#540101'
}
const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  return (
    //<Card style = {white}>
      
        <Card style={white}>
        <Card.Img src={photoURL} />
        <Card.Body>
          <Card.Header style = {{color: '#ffffff'}}><h4>{displayName}</h4></Card.Header>
            <Card.Text>
              Email: {email}
            </Card.Text>
          <Button onClick = {() => {auth.signOut()}}>Sign out</Button>
        </Card.Body>
      </Card>

  ) 
};
export default ProfilePage;