import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

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