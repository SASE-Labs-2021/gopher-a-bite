  
import React, { Component, createContext } from "react";
import { auth } from "../firebase";

import Spinner from 'react-bootstrap/Spinner';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
    checking: true
  };
  
  componentDidMount = async () => { 
    await auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth, checking: false });
      console.log("mounting component");
    });
};

  render() {
    if (this.state.checking) {
      return <Spinner animation = "border"
                variant = "dark" / > ;
    }
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;