import React, {useState} from "react";
import { signInWithGoogle } from "../firebase";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const white = {
  background: "#fff",
  width: '20rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '3px solid #bd930a',
  color: '#540101'
}
const SignIn = () => {
  return (
    <Card style = {white}>
      <h2>Sign In</h2>
      <div>
        
        <Button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Click Here to Sign in with Google
        </Button>
      </div>
    </Card>
  );
};

export default SignIn;